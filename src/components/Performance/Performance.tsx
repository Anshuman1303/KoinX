import { FaInfoCircle } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";

function RainbowBar({ value }: { value?: number | string }) {
  return (
    <div className="relative w-full rounded-xl h-1 bg-gradient-to-r from-[#FF4949] via-[#FF4E11] via[#FC870A] via-[#FFAF11] via-[#C2CB21] to-[#11EB68]">
      {value && (
        <div className={`flex flex-col items-center absolute -translate-x-1/2 left-3/4`}>
          <GoTriangleUp />
          <h2 className="text-sm font-normal">{value}</h2>
        </div>
      )}
    </div>
  );
}
const fundamentalsData = [
  { key: "Bitcoin Price", data: "$16,815.46" },
  { key: "Market Cap", data: "$323,507,290,047" },
  { key: "24h Low / 24h High", data: "$16,382.07 / $16,874.12" },
  { key: "Market Cap Dominance", data: "38.343%" },
  { key: "7d Low / 7d High", data: "$16,382.07 / $16,874.12" },
  { key: "Volume / Market Cap", data: "0.0718" },
  { key: "Trading Volume", data: "$23,249,202,782" },
  { key: "All-Time High", data: "$69,044.77" },
  { key: "Market Cap Rank", data: "#1" },
  { key: "All-Time Low", data: "$67.81" },
];
export default function Performance() {
  return (
    <div className="box flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <h1>Performance</h1>
        <div className="flex flex-row text-nowrap items-center gap-4">
          <div className="flex flex-col">
            <h2 className="font-normal text-[14px]">Today&apos;s Low</h2>
            <h2 className="font-medium text-[16px]">46,930.22</h2>
          </div>
          <RainbowBar value={"$48,637.83"} />

          <div className="flex flex-col">
            <h2 className="font-normal text-[14px]">Today&apos;s High</h2>
            <h2 className="font-medium text-[16px]">49,343.83</h2>
          </div>
        </div>
        <div className="flex flex-row text-nowrap items-center gap-4">
          <div className="flex flex-col">
            <h2 className="font-normal text-[14px]">Today&apos;s Low</h2>
            <h2 className="font-medium text-[16px]">46,930.22</h2>
          </div>
          <RainbowBar />
          <div className="flex flex-col">
            <h2 className="font-normal text-[14px]">Today&apos;s High</h2>
            <h2 className="font-medium text-[16px]">49,343.83</h2>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg">
          Fundamentals <FaInfoCircle className="inline" />
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
          {fundamentalsData.map((item, index) => (
            <div className="text-sm font-medium flex flex-row justify-between border-b border-white-400 py-4" key={index}>
              <h2 className="">{item.key}</h2>
              <h2 className="text-black-100">{item.data}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
