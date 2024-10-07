import { ReactNode } from "react";
import "./column-text.scss";

function createColumns(number: number) {
  const columnSizes = [] as string[];

  for (let i = 0; i < number; i++) {
    columnSizes.push("1fr");
  }

  return columnSizes.join(" ");
}

export function outputTextWithNewLine(text: string) {
  const split = text.split("\n");
  return split.map((line) => (
    <span key={line}>
      {line} <br />
    </span>
  ));
}

export default function ColumnText({
  textArr,
  textSize,
}: {
  textArr: string[];
  textSize?: "regular" | "large";
}) {
  return (
    <div className="column-text__wrapper">
      <div
        className={`column-text__container ${textSize === "large" ? "large-text" : ""}`}
      >
        {textArr?.length
          ? textArr.map((text, i) =>
              textSize === "large" ? (
                <h3
                  key={text}
                  style={
                    textArr.length === 1
                      ? { width: "fit-content", maxWidth: "70rem" }
                      : {}
                  }
                >
                  {outputTextWithNewLine(text)}
                </h3>
              ) : (
                <p
                  key={text}
                  style={
                    textArr.length === 1
                      ? { width: "fit-content", maxWidth: "70rem" }
                      : {}
                  }
                >
                  {outputTextWithNewLine(text)}
                </p>
              )
            )
          : null}
      </div>
    </div>
  );
}
