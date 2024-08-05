import { ReactNode } from "react";
import "./column-text.scss";

function createColumns(number: number) {
  const columnSizes = [] as string[];

  for (let i = 0; i < number; i++) {
    columnSizes.push("1fr");
  }

  return columnSizes.join(" ");
}

export default function ColumnText({
  textArr,
}: {
  textArr: TextArray;
}) {
  return (
    <div className="column-text__wrapper">
      <div
        className={`column-text__container`}
        style={{ gridTemplateColumns: createColumns(textArr.length) }}
      >
        {textArr.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </div>
  );
}
