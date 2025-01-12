/* eslint-disable @typescript-eslint/no-explicit-any */
import useTrendingCoins from "@/hooks/useTrendingCoins";
import Chip from "../Chip/Chip";
import { Fragment } from "react";
import Image from "next/image";
function CoinList() {
  const trendingCoinsData: any = useTrendingCoins();

  return (
    <>
      {trendingCoinsData?.coins
        .filter((coin: any, index: number) => {
          return index < 3;
        })
        .map((coin: any, index: number) => (
          <div key={index} className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-1">
              <Image
                loader={() => coin?.item?.thumb}
                src={coin?.item?.thumb}
                alt="coin thumbnail"
                width={64}
                height={64}
                className="rounded-full h-full w-auto"
              />
              {coin.item.name} &#40;{coin.item.symbol}&#41;
            </div>
            <Chip value={coin?.item?.data?.price_change_percentage_24h?.usd} />
          </div>
        ))}
    </>
  );
}

export default function TrendingCoins() {
  return (
    <div className="box flex flex-col gap-5">
      <h1 className="mb-1">Trending Coins &#40;24h&#41;</h1>
      <CoinList />
    </div>
  );
}
