"use client";

import { useLayoutEffect, useRef } from "react";
import "./parallax-image-header.scss";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ParallaxImageHeader({ images }: { images: Images }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.to(imagesRef.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 2,
      },
      x: -1000,
    });
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true,
        start: "top top",
        end: "+=1000",
        scrub: 1,
      },
      scale: 0.65,
      boxShadow: "0rem 0.4rem 3.2rem rgba(194, 194, 194, 1)",
    });
  }, []);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.classList.add("visible");
    }
  }, []);

  return (
    <section className="parallax-header__wrapper" ref={wrapperRef}>
      <div className="parallax-header__container" ref={containerRef}>
        <div className="images__container" ref={imagesRef}>
          {images.map((image) => (
            <div className="image__wrapper" key={image.src}>
              <Image
                fill
                style={{ objectFit: "cover" }}
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
