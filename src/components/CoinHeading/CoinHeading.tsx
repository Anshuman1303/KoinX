"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import useCoinData from "@/hooks/useCoinData";
import Image from "next/image";

export default function CoinHeading({ coin }: { coin: string }) {
  const coinData: any = useCoinData(coin);
  if (coinData)
    return (
      <div className="flex flex-row items-center h-9 gap-2">
        {coinData?.image?.large ? (
          <Image
            loader={() => coinData?.image?.large}
            src={coinData?.image?.large}
            width={64}
            height={64}
            alt={"Bitcoin Logo"}
            className="h-full w-auto"
          />
        ) : (
          <p>loading</p>
        )}
        <h1 className="capitalize">{coin}</h1>
        <h2 className="uppercase">{coinData?.symbol}</h2>
        <div className="bg-black-500 font-medium text-white-100 p-[10px] rounded-lg ml-8">Rank #{coinData?.market_cap_rank}</div>
      </div>
    );
  return <p>loading</p>;
}
