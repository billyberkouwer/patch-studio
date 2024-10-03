import { useRef, useState } from "react";
import SeePortfolioButton from "./SeePortfolioButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./portfolio.scss";

gsap.registerPlugin(useGSAP);

export default function Portfolio() {
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const portfolioWrapperRef = useRef<HTMLDivElement>(null);

  function handlePortfolioVisibility() {
    setIsPortfolioVisible(!isPortfolioVisible);
  }

  useGSAP(() => {
    if (isPortfolioVisible) {
      gsap.to(portfolioWrapperRef.current, {
        y: "0%",
      });
    } else {
      gsap.to(portfolioWrapperRef.current, {
        y: "100%",
      });
    }
  }, [isPortfolioVisible]);

  return (
    <>
      <div ref={portfolioWrapperRef} className="portfolio__wrapper">
        <div className="portfolio__container"></div>
      </div>
      <SeePortfolioButton callback={handlePortfolioVisibility}>{isPortfolioVisible ? "Close" : "See"} Portfolio</SeePortfolioButton>
    </>
  );
}
