import Image from "next/image";

export default function Tokenomics() {
  return (
    <div className="box flex flex-col gap-4">
      <h1>Tokenomics</h1>
      <h2 className="text-lg font-bold text-black-100">Initial Distribution</h2>
      <div className="flex flex-row items-center gap-8">
        <Image src={"/images/distributionChart.png"} alt={"Chart Image"} width={358} height={359} className="w-1/4" />
        <div className="flex flex-col text-[16px] font-normal">
          <div className="flex flex-row items-center gap-2">
            <div className="h-3 aspect-square rounded-full bg-[#0082FF]"></div>Crowdsale investors: 80%
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="h-3 aspect-square rounded-full bg-[#FAA002]"></div>Foundation: 20%
          </div>
        </div>
      </div>
      <p className="text-[16px] text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
        bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
        massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus
        odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum
        aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
}
