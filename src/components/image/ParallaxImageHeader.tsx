"use client"

import { useLayoutEffect, useRef } from "react";
import "./parallax-image-header.scss";
import Image from "next/image";

export default function ParallaxImageHeader({
    images
}: {
    images: {
        src: string;
        alt: string;
    }[]
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (containerRef.current) {
            const viewportHeight = window.getComputedStyle(document.documentElement).getPropertyValue('--real-viewport-height');
            const navHeight = window.getComputedStyle(document.documentElement).getPropertyValue('--nav-height');
            containerRef.current.style.height = parseInt(viewportHeight, 10) - parseInt(navHeight, 10) - 8 + "px";
            containerRef.current.style.marginTop = navHeight;
            console.log(navHeight)
        }
    }, [])

    return (
        <section className="parallax-header__container" ref={containerRef}>
            {images.map((image) => (
                <div className="image__wrapper" key={image.src}>
                    <Image fill style={{objectFit: "cover"}} src={image.src} alt={image.alt} />
                </div>
            ))}
        </section>
    )
}