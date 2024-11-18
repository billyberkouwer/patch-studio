"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import "./booking-iframe.scss";
import { useSearchParams } from "next/navigation";
import NavLogo from "../nav/NavLogo";
import LoadingBookings from "./LoadingBookings";

gsap.registerPlugin(useGSAP);

export default function BookingIframe() {
  const searchParams = useSearchParams();
  const [hasIframeLoaded, setHasIframeLoaded] = useState(false);
  const iframeWrapper = useRef<HTMLIFrameElement>(null);
  const [iframeSrc, setIframeSrc] = useState("");
  const [iframeHeight, setIframeHeight] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    function resizeIframe() {
      const navHeight = parseInt(
        getComputedStyle(document.body).getPropertyValue("--nav-height")
      );
      const viewportHeight = parseInt(
        getComputedStyle(document.body).getPropertyValue(
          "--real-viewport-height"
        )
      );
      let iframeHeight;
      if (iframeWrapper.current) {
        iframeHeight = viewportHeight;
        if (navHeight) {
          if (iframeWrapper.current) {
            iframeHeight -= navHeight;
          }
        }
        setIframeHeight(iframeHeight);
      }
      console.log(iframeHeight);
    }
    resizeIframe();
  }, []);

  useEffect(() => {
    if (searchParams.get("at")) {
      setIframeSrc(
        `https://app.acuityscheduling.com/schedule.php?owner=${process.env.NEXT_PUBLIC_ACUITY_SCHEDULING_LINK_ID}&ref=embedded_csp&appointmentType=${searchParams.get("at")}`
      );
    } else {
      setIframeSrc(
        `https://app.acuityscheduling.com/schedule.php?owner=${process.env.NEXT_PUBLIC_ACUITY_SCHEDULING_LINK_ID}&ref=embedded_csp`
      );
    }
  }, [searchParams]);

  useGSAP(() => {
    gsap.fromTo(
      iframeWrapper.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.5,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className={`page__wrapper --fixed-height --hide-navbar`}>
      <div ref={iframeWrapper} className="iframe__wrapper">
        {iframeSrc && iframeHeight ? (
          <iframe
            src={iframeSrc}
            title="Schedule Appointment"
            width="100%"
            height={iframeHeight}
            style={{height: iframeHeight + "px"}}
            className="acuity-iframe"
            id="iframe"
            onLoad={(el) => {
              setHasIframeLoaded(true);
              (el.target as HTMLIFrameElement).height = `${iframeHeight}`;
              (el.target as HTMLIFrameElement).style.maxHeight = `${iframeHeight}px`;
            }}
          ></iframe>
        ) : null}
      </div>
    </div>
  );
}
