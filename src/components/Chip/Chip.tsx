import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

export default function Chip({ value }: { value: number }) {
  return (
    <div
      className={`inline rounded-[4px] flex flex-row items-center gap-1 p-2 ${
        value > 0 ? "bg-green-100 text-green-200" : "bg-red-100 text-red-600"
      }`}>
      {value > 0 ? <GoTriangleUp /> : <GoTriangleDown />}
      {(Math.round(Math.abs(value) * 100) / 100).toFixed(2)}
    </div>
  );
}
