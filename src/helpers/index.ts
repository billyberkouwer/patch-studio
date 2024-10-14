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
  image: SanityImageAssetDocument | null,
  wrapper: HTMLDivElement | null,
  size: "extra-small" |  "small" | "medium" | "large" ,
  dimension?: "width" | "height"
) {
  if (wrapper && image && (dimension === "width" || !dimension)) {
    wrapper.classList.add("--" + size);
    const height = Math.round(parseInt(getComputedStyle(wrapper).height));
    wrapper.style.width = image.metadata.dimensions.aspectRatio * height + "px";
  }
  if (wrapper && image && dimension === "height") {
    wrapper.classList.add("--" + size);
    const width = Math.round(parseInt(getComputedStyle(wrapper).width));
    wrapper.style.height = width / image.metadata.dimensions.aspectRatio  + "px";
  }
}

export function getNextImageSizes(size: "extra-small" | "small" | "medium" | "large"): string {
  if (size === "extra-small") {
    return "(max-width: 768px) 40vw, (max-width: 1200px) 12vw, 5vw";
  }
  if (size === "small") {
    return "(max-width: 768px) 60vw, (max-width: 1200px) 15vw, 5vw";
  }
  if (size === "medium") {
    return "(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 33vw";
  }
  if (size === "large") {
    return "(max-width: 768px) 90vw, (max-width: 1200px) 30vw, 15vw";
  }
  return "(max-width: 768px) 70vw, (max-width: 1200px) 20vw, 10vw";
}

export function splitArrayIntoSubArrays(arr: any[], n: number) {
  var rest = arr.length % n, // how much to divide
    restUsed = rest, // to keep track of the division over the elements
    partLength = Math.floor(arr.length / n),
    result = [];

  for (var i = 0; i < arr.length; i += partLength) {
    var end = partLength + i,
      add = false;

    if (rest !== 0 && restUsed) {
      // should add one element for the division
      end++;
      restUsed--; // we've used one division element now
      add = true;
    }

    result.push(arr.slice(i, end)); // part of the array

    if (add) {
      i++; // also increment i in the case we added an extra element for division
    }
  }

  return result;
}

export function filterSrc(iframeString: string | null | undefined) {
  // Regular expression to match the src attribute
  if (iframeString) {
    const match = iframeString.match(/src="([^"]+)"/);
    if (match) {
      return match[1];
    }
  }

  return null;
}

export function formatContactLink(link: string, linkType: string) {
  switch (linkType) {
    case "Email address":
      return "mailto:" + link;
      break;
    case "Telephone number":
      return "tel:" + link;
      break;
    case "Website link":
      if (!link.includes("http://") && !link.includes("https://")) {
        return "https://" + link;
      } else {
        return link;
      }
      break;
    default:
      return "#";
      break;
  }
}

export function lightOrDark(color: any) {
  let r, g, b;
  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    r = color?.[1];
    g = color?.[2];
    b = color?.[3];
  } else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP equation from http://alienryderflex.com/hsp.html
  let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return "light";
  } else {
    return "dark";
  }
}
