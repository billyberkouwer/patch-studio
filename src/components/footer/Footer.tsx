import Link from "next/link";
import "./footer.scss";

export default function Footer({
  pages,
}: {
  pages: { title: string; slug: string }[];
}) {
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
          <Link href={"/"}>Terms and Conditions</Link>
        </div>
      </div>
    </nav>
  );
}
