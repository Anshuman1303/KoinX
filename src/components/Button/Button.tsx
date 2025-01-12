export default function Button({ title, className }: { title: string | React.ReactNode; className?: string }) {
  return <button className={`py-2 px-6 rounded-lg ${className}`}>{title}</button>;
}
