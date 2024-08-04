import "./center-logo.scss";

export default function CenterLogo({
  text = "Patch Studio",
  state,
}: {
  text?: "Patch Studio" | "Editorial" | "Headshot";
  state?: "invert";
}) {
  return (
    <div className={`center-logo__wrapper invert`}>
      <h1 className={`center-logo`}>{text}</h1>
    </div>
  );
}
