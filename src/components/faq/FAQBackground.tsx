"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./faq-background.scss";
import { createNoise2D } from "simplex-noise";

const QUESTION_MARKS = ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"];
const SPEED_FACTOR = 0.00001;

gsap.registerPlugin(useGSAP);

export default function FAQBackground() {
  useGSAP(() => {
    const noise = createNoise2D();
    let start: undefined | number;

    let randomCoords: { x: number; y: number }[] = [];
    const faqHeight = document.getElementById("faq-section")?.clientHeight;
    console.log(faqHeight);
    QUESTION_MARKS.forEach(() => {
      randomCoords.push({
        x: Math.floor(Math.random() * window.window.innerWidth) / 2,
        y:
          Math.floor(
            Math.random() * (faqHeight || window.innerHeight / 2) - 60
          ) / 2,
      });
    });

    const questionMarks = gsap.utils.toArray(
      ".question-mark"
    ) as HTMLSpanElement[];

    function addTimeToCoords(timeStamp: number) {
      if (start === undefined) {
        start = timeStamp * SPEED_FACTOR;
      }

      const elapsed = timeStamp * SPEED_FACTOR - start;
      const noiseCoordArr = randomCoords.map((coord, i) => ({
        x: Math.abs(noise(coord.x + elapsed, coord.x + elapsed) + 0.5) / 1.5,
        y: Math.abs(noise(coord.y + elapsed, coord.y + elapsed) + 0.5) / 1.5,
      }));

      questionMarks.forEach((questionMark, i) => {
        questionMark.style.transform =
          "translate(" +
          noiseCoordArr[i].x * window.innerWidth +
          "px" +
          "," +
          noiseCoordArr[i].y * (faqHeight || window.innerHeight / 2) +
          "px" +
          ") " +
          "rotate(" +
          noiseCoordArr[i].x * 360 +
          "deg)";
      });

      requestAnimationFrame(addTimeToCoords);
    }
    const animationFrame = requestAnimationFrame(addTimeToCoords);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  return (
    <div className="faq-background__wrapper">
      <div className="faq-background__container">
        {QUESTION_MARKS.map((questionMark, i) => (
          <span key={"question mark" + i} className="question-mark">
            {questionMark}
          </span>
        ))}
      </div>
    </div>
  );
}
