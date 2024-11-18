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

  function resizeIframe(obj: HTMLIFrameElement) {
    console.log(obj.contentWindow);
    obj.style.height = obj?.contentWindow?.document.body.scrollHeight + "px";
  }

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
    <div
      className={`page__wrapper --hide-navbar ${hasIframeLoaded ? "--top-padding" : ""}`}
    >
      <div ref={iframeWrapper} className="iframe__wrapper">
        <iframe
          src={`https://app.acuityscheduling.com/schedule.php?owner=${process.env.NEXT_PUBLIC_ACUITY_SCHEDULING_LINK_ID}&ref=embedded_csp${searchParams.get("at") ? "&appointmentType=" + searchParams.get("at") : ""}`}
          title="Schedule Appointment"
          width="100%"
          height="800"
          className="acuity-iframe"
          id="iframe"
          onLoad={() => setHasIframeLoaded(true)}
        ></iframe>
        {!hasIframeLoaded ? <LoadingBookings /> : null}
      </div>
    </div>
  );
}
