import Link from "next/link";
import "./center-logo.scss";

export default function CenterLogo({
  text = "Patch Studio",
  isLogoBlue = false,
}: {
  text?: string;
  isLogoBlue?: boolean;
}) {
  return (
    <div className={`center-logo__wrapper ${isLogoBlue ? "" : "invert"}`}>
      <Link href={"/"}><h1 className={`center-logo`}>{text}</h1></Link>
    </div>
  );
}
