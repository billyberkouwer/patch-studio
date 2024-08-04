import Link from "next/link";
import "./nav.scss";

export default function Nav({
  navItems,
}: {
  navItems: {
    title: string;
    slug: string;
  }[];
}) {
  return (
    <nav>
      <ul className="nav-list">
        {navItems.map((navItem) => (
          <li key={navItem.title + navItem.slug} className="nav-item">
            <Link href={navItem.slug}>{navItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
