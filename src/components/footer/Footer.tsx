"use client";

import Link from "next/link";
import "./footer.scss";
import { usePathname } from "next/navigation";

export default function Footer({
  pages,
}: {
  pages: { title: string; slug: string }[];
}) {
  const pathname = usePathname();

  if (pathname.includes("admin")) {
    return null;
  }

  return (
    <nav className="footer__wrapper" id="footer">
      <div className="footer__container">
        <ul className="page-links__container">
          {pages.map((page) => (
            <li key={page.title}>
              <Link href={page.slug}>{page.title}</Link>
            </li>
          ))}
        </ul>
        <div className="copyright__container">© Patch Studio</div>
        <div className="ts-and-cs2__container">
          <Link href={"/terms-and-conditions"}>Terms and Conditions</Link>
        </div>
      </div>
    </nav>
  );
}
