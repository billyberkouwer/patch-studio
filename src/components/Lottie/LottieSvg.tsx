import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from "react";
import "./lottie-svg.scss";

export default function LottieSvg({
  src,
  isExpanded,
  direction,
  strokeWidth,
  color,
}: {
  src: any;
  isExpanded: boolean;
  direction: 1 | -1;
  strokeWidth?: number;
  color?: string;
}) {
  const [lottieInstance, setLottieInstance] = useState<any>(null);
  const player = useRef<Player>(null);

  useEffect(() => {
    const svg = lottieInstance?.renderer?.svgElement;
    const paths = svg?.querySelectorAll("path");
    if (paths) {
      paths.forEach((path: SVGPathElement) => {
        path.setAttribute("stroke", color ? color : "white");
        path.setAttribute(
          "stroke-width",
          strokeWidth ? `${strokeWidth}` : "20"
        );
        path.setAttribute("stroke-linecap", "square");
      });
    }
  }, [lottieInstance, color, strokeWidth]);

  useEffect(() => {
    player.current?.setPlayerDirection(direction);
    player.current?.play();
  }, [direction, isExpanded]);

  return (
    <Player
      lottieRef={(instance) => setLottieInstance(instance)}
      ref={player}
      src={src}
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
      renderer="svg"
      speed={4}
      loop={false}
      onEvent={(event) => {
        if (event === "load") {
          player.current?.play();
        }
        if (event === "frame") {
          if (player.current?.state?.instance) {
            if (
              player.current.state.seeker >
                player.current.state.instance.totalFrames - 10 &&
              direction === 1
            ) {
              player.current?.pause();
            }
          }
        }
      }}
    />
  );
}
