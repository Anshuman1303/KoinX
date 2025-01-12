import Image from "next/image";

export default function CoinHeading() {
  return (
    <div className="flex flex-row items-center h-9 gap-2">
      <Image src={"/images/BTCLogo.png"} width={72} height={72} alt={"Bitcoin Logo"} className="h-full w-auto" />
      <h1>Bitcoin</h1>
      <h2>BTC</h2>
      <div className="bg-black-500 font-medium text-white-100 p-[10px] rounded-lg ml-8">Rank #1</div>
    </div>
  );
}
