import Link from "next/link";
import "./nav-logo.scss";

export default function NavLogo() {
  return <Link href={"/"} className={`patch-logo`}>Patch Studio</Link>;
}
