import { HomepageComponentTypes } from "@/types";

export function assignClasses(componentData: HomepageComponentTypes) {
  return componentData.centerTextContent !== "patch-studio" &&
    componentData.centerTextContent
    ? componentData.centerTextContent
    : "hide-button patch-studio";
}

export function extractNumbersFromArray(stringsArray: string[]) {
  const numbers = [];

  for (let str of stringsArray) {
    const match = str.match(/-(\d+)$/);
    if (match) {
      numbers.push(parseInt(match[1], 10));
    }
  }

  return numbers;
}

export function getEndPositionFromClasslist(classList: DOMTokenList) {
  const classArr = Array.from(classList);
  const scaleAmount = extractNumbersFromArray(classArr);
  if (scaleAmount.length) {
    return `bottom ${scaleAmount[0]}%`;
  }
  return "bottom 50%";
}

export function getCenterTextFromClasslist(classList: DOMTokenList) {
  const formatTitle = classList[classList.length - 1].replace(/-/g, " ");
  return formatTitle;
}
