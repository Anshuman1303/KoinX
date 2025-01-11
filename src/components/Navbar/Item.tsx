import Link from "next/link";

export default function Item({ title, href }: { title: string; href: string }) {
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
}
