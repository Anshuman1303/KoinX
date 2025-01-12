import { FaInfoCircle } from "react-icons/fa";
import Carasouel from "../Carasouel/Carasouel";
import { HiNewspaper } from "react-icons/hi2";
import { IoIosTrendingUp } from "react-icons/io";

function Bar({ className }: { className: string }) {
  return <div className={`rounded-xl h-1 ${className}`}></div>;
}

const eventsData = [
  { logo: HiNewspaper, style: "bg-[#E8F4FD]", iconStyle: "bg-[#0082ff]" },
  { logo: IoIosTrendingUp, style: "bg-[#EBF9F4]", iconStyle: "bg-[#0fba83]" },
  { logo: HiNewspaper, style: "bg-[#E8F4FD]", iconStyle: "bg-[#0082ff]" },
  { logo: IoIosTrendingUp, style: "bg-[#EBF9F4]", iconStyle: "bg-[#0fba83]" },
];

export default function Sentiment() {
  return (
    <div className="box flex flex-col gap-4">
      <h1>Sentiment</h1>
      <h2 className="text-lg">
        Key Events <FaInfoCircle className="inline" />
      </h2>
      <Carasouel className="flex flex-row gap-4">
        {eventsData.map((item, index) => (
          <div key={index} className={`rounded-xl gap-4 p-4 flex flex-row min-w-[max(400px,50%)] max-w-full ${item.style}`}>
            <div className={`p-4 rounded-full ${item.iconStyle} w-16 h-16 aspect-square text-white-100`}>
              <item.logo className={`w-full h-full`} />
            </div>
            <div className="flex flex-col text-sm font-normal gap-2">
              <h2 className="text-black-100">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h2>
              <p className="text-black-400">
                Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing
                condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
              </p>
            </div>
          </div>
        ))}
      </Carasouel>
      <h2 className="text-lg">
        Analyst Estimates <FaInfoCircle className="inline" />
      </h2>
      <div className="flex flex-row gap-8">
        <div className="bg-green-100 text-green-200 aspect-square flex items-center justify-center w-[100px] rounded-full">
          <h1>76%</h1>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row items-center gap-4">
            <h2>Buy</h2>
            <Bar className="bg-[#00B386] w-[76%]" />
            <h2>76%</h2>
          </div>
          <div className="flex flex-row items-center gap-4">
            <h2>Hold</h2>
            <Bar className="bg-[#C7C8CE] w-[8%]" />
            <h2>8%</h2>
          </div>
          <div className="flex flex-row items-center gap-4">
            <h2>Sell</h2>
            <Bar className="bg-[#f7324c] w-[16%]" />
            <h2>16%</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
