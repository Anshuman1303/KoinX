import Image from "next/image";
import Button from "../Button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function GetStarted() {
  return (
    <div className="bg-blue-300 flex flex-col text-white-100 rounded-lg px-14 py-8 items-center gap-[14px] text-center">
      <h1>Get Started with KoinX for FREE</h1>
      <p className="text-sm font-medium text-white-150">
        With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
      </p>
      <Image src={"/images/getStarted.png"} alt="woman using phone" width={358} height={333} className="w-1/2 my-5" />
      <Button
        className="bg-white-100 text-black-100 mb-6"
        title={
          <>
            Get Started for FREE <IoIosArrowRoundForward className="inline" />
          </>
        }
      />
    </div>
  );
}
