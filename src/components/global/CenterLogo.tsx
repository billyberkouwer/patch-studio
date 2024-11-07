import Link from "next/link";
import "./center-logo.scss";

export default function CenterLogo({
  text = "Patch Studio",
  link,
  isLogoBlue = false,
}: {
  text?: string;
  link?: string | null;
  isLogoBlue?: boolean;
}) {
  return (
    <div className={`center-logo__wrapper ${isLogoBlue ? "" : "invert"}`}>
      {link ? (
        <Link href={"/" + link}>
          <h1 className={`center-logo`}>{text}</h1>
        </Link>
      ) : (
        <h1 className={`center-logo`}>{text}</h1>
      )}
    </div>
  );
}
