export default function Button({ title, href, className }: { title: string; href?: string; className?: string }) {
  return <button className={`py-2 px-6 rounded-lg ${className}`}>{title}</button>;
}
