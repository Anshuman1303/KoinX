import Image from "next/image";
import { ReactNode } from "react";
import Button from "../Button/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ className, image, title }: { className?: string; image: ReactNode; title: string }) {
  return (
    <div className={`grid grid-cols-[3fr_5fr] gap-4 text-white-100 items-center p-3 rounded-md  ${className}`}>
      {image}{" "}
      <div className="flex flex-col gap-4 items-start">
        <h1 className="text-xl">{title}</h1>
        <Button
          className="bg-white-100 text-black-100 text-nowrap text-sm"
          title={
            <>
              Check Now <IoIosArrowRoundForward className="inline" />
            </>
          }
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="box flex flex-col gap-4">
      <h1>About Bitcoin</h1>
      <h2 className="text-lg font-bold text-black-100">What is Bitcoin?</h2>
      <p className="text-[16px] text-[#3E424A]">
        Bitcoin&apos;s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
        currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a
        circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
      </p>
      <hr />
      <h2 className="text-lg font-bold text-black-100">Lorem ipsum dolor sit amet</h2>
      <p className="text-[16px] text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam
        dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
        Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Diam
        praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing
        cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed
        volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim
        augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at. Fermentum hendrerit imperdiet
        nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus.
        Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
      </p>
      <hr />
      <h1>Already Holding Bitcoin?</h1>
      <div className="flex flex-row gap-8">
        <Card
          title="Calculate your Profits"
          className="bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] w-1/2"
          image={<Image src={"/images/profits.png"} alt={"profits image"} width={256} height={256} />}
        />
        <Card
          title="Calculate your tax liability"
          className="bg-gradient-to-br from-[#FF9865] to-[#EF3031] w-1/2"
          image={<Image src={"/images/tax.png"} alt={"tax image"} width={256} height={256} />}
        />
      </div>
      <hr />
      <p className="text-[16px] text-[#3E424A]">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque
        porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
        eget. Ullamcorper dui
      </p>
    </div>
  );
}
