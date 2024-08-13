import { HomepageComponentTypes } from "@/types";
import { SanityImageAssetDocument } from "next-sanity";

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

export function ImageSizing(
  image: SanityImageAssetDocument,
  wrapper: HTMLDivElement | null,
  size: "small" | "medium" | "large"
) {
  if (wrapper) {
    wrapper.classList.add("--" + size);
    const height = Math.round(parseInt(getComputedStyle(wrapper).height));
    wrapper.style.width = image.metadata.dimensions.aspectRatio * height + "px";
  }
}

export function getSizeFromString(size: "small" | "medium" | "large"): number {
  if (size === "small") {
    return 30;
  }
  if (size === "medium") {
    return 50;
  }
  if (size === "large") {
    return 70;
  }
  return 30;
}

export function getNextImageSizes(size: "small" | "medium" | "large"): string {
  if (size === "small") {
    return "(max-width: 768px) 60vw, (max-width: 1200px) 15vw, 5vw";
  }
  if (size === "medium") {
    return "(max-width: 768px) 70vw, (max-width: 1200px) 20vw, 10vw";
  }
  if (size === "large") {
    return "(max-width: 768px) 90vw, (max-width: 1200px) 30vw, 15vw";
  }
  return "(max-width: 768px) 70vw, (max-width: 1200px) 20vw, 10vw";
}
