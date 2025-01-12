/* eslint-disable @typescript-eslint/no-explicit-any */
import useTrendingCoins from "@/hooks/useTrendingCoins";
import Carousel from "../Carousel/Carousel";
import Image from "next/image";
import Chip from "../Chip/Chip";

export default function CoinList() {
  const trendingCoinsData: any = useTrendingCoins();
  return (
    <>
      {trendingCoinsData?.coins && (
        <Carousel className="gap-[10px]">
          {trendingCoinsData?.coins.map((coin: any, index: number) => (
            <div
              className="p-[17px] rounded-[10px] aspect-[3] border-[#E3E3E3] border bg-white-100 flex flex-col min-w-[max(250px,20%)] max-w-full gap-1"
              key={index}>
              <div className="flex flex-row items-center gap-1">
                <Image
                  loader={() => coin?.item?.thumb}
                  src={coin?.item?.thumb}
                  alt="coin thumbnail"
                  width={64}
                  height={64}
                  className="rounded-full h-full w-auto"
                />
                <h2 className="text-[16px] font-normal text-black-100 ml-1">{coin?.item?.symbol}</h2>
                <Chip className="px-1 py-0" value={coin?.item?.data?.price_change_percentage_24h?.usd} />
              </div>
              <h1 className="text-xl font-medium">
                &#36;{coin?.item?.data?.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </h1>
              <div className="w-full object-contain h-full flex items-center justify-center p-0 lg:px-8 lg:py-1">
                <Image
                  loader={() => coin?.item?.data?.sparkline}
                  src={coin?.item?.data?.sparkline}
                  alt="sparkline"
                  width={128}
                  height={128}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
}
