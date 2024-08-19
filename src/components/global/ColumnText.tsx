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
  textArr: string[];
}) {
  return (
    <div className="column-text__wrapper">
      <div
        className={`column-text__container`}
      >
        {textArr.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </div>
  );
}
