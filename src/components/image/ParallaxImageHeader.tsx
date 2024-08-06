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
    gsap.fromTo(imagesRef.current, {
      x: 0
    },{
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: () => "+=3000",
        scrub: 0.2,
      },
      x: -1000,
    });
    gsap.fromTo(containerRef.current, {
      scale: 1
    },{
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true,
        start: "top top",
        end: () => "+=1000",
        scrub: 0.2,
        anticipatePin: 1,
      },
      scale: 0.65,
    });
  });

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
