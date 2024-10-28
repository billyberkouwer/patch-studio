import "./column-text.scss";

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
                <p
                  key={"column paragraph text" + i}
                  style={
                    textArr.length === 1
                      ? { width: "fit-content", maxWidth: "70rem" }
                      : textArr.length > 1
                        ? { textAlign: "left" }
                        : { textAlign: "center" }
                  }
                >
                  {outputTextWithNewLine(text)}
                </p>
              ) : (
                <p
                  key={"column paragraph text" + i}
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
