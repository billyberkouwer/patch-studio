"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import "./booking-iframe.scss";
import { useSearchParams } from "next/navigation";

gsap.registerPlugin(useGSAP);

export default function BookingIframe() {
  const searchParams = useSearchParams();
  const [hasIframeLoaded, setHasIframeLoaded] = useState(false);
  const iframeWrapper = useRef<HTMLIFrameElement>(null);

  useGSAP(() => {
    console.log(iframeWrapper);
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
    <div className="page__wrapper --top-padding --hide-navbar">
      <div ref={iframeWrapper} className="iframe__wrapper">
        <iframe
          src={`https://app.acuityscheduling.com/schedule.php?owner=33295712&ref=embedded_csp${searchParams.get("at") ? "&appointmentType=" + searchParams.get("at") : ""}`}
          title="Schedule Appointment"
          width="100%"
          height={"100%"}
          className="acuity-iframe"
          id="iframe"
        ></iframe>
      </div>
    </div>
  );
}
