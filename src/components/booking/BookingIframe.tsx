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
      const navbar = document.getElementById("navbar");
      let iframeHeight;
      if (iframeWrapper.current) {
        iframeHeight = iframeWrapper.current.clientHeight;
        if (navbar) {
          const navHeight = navbar.getBoundingClientRect().height;
          if (iframeWrapper.current) {
            iframeHeight -= navHeight * 2;
          }
        }
        setIframeHeight(iframeHeight);
      }


    }

    resizeIframe();

    window.addEventListener("resize", resizeIframe);

    return () => {
      window.removeEventListener("resize", resizeIframe);
    };
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
    <div className={`page__wrapper --hide-navbar`}>
      <div ref={iframeWrapper} className="iframe__wrapper">
        {!hasIframeLoaded ? <LoadingBookings /> : null}
        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            title="Schedule Appointment"
            width="100%"
            height={iframeHeight}
            className="acuity-iframe"
            id="iframe"
            onLoad={() => setHasIframeLoaded(true)}
          ></iframe>
        ) : null}
      </div>
    </div>
  );
}
