"use client";
import CoinHeading from "@/components/CoinHeading/CoinHeading";
import GetStarted from "@/components/GetStarted/GetStarted";
import TradingViewWidget from "@/components/TradingViewWidget/TradingViewWidget";
import TrendingCoins from "@/components/TrendingCoins/TrendingCoins";
import Price from "@/components/Price/Price";
import TabMenu from "@/components/TabMenu/TabMenu";
import Performance from "@/components/Performance/Performance";
import Sentiment from "@/components/Sentiment/Sentiment";
import About from "@/components/About/About";
import Tokenomics from "@/components/Tokenomics/Tokenomics";
import Team from "@/components/Team/Team";
import useBreakpoints from "@/hooks/useBreakpoints";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import AlsoLike from "@/components/AlsoLike/AlsoLike";
import { useParams } from "next/navigation";

export default function Page() {
  const isLg = useBreakpoints("lg");
  const { coin } = useParams<{ coin: string }>();
  return (
    <>
      <div className="px-[14px] lg:px-14">
        <Breadcrumbs coin={coin} />
        <div className="my-4 grid grid-rows-[auto_auto] lg:grid-rows-none lg:grid-cols-[2fr_1fr] gap-10">
          <div className="flex flex-col gap-8 w-full min-w-0">
            {!isLg && <CoinHeading coin={coin} />}
            <div className="box flex flex-col gap-8">
              {isLg && <CoinHeading coin={coin} />}
              <Price coin={coin} />
              <hr />
              <div className="w-full aspect-video">
                <TradingViewWidget coin={coin} />
              </div>
            </div>
            <TabMenu />
            <Performance />
            <Sentiment />
            <About />
            {isLg && <Tokenomics />}
            <Team />
          </div>
          <div className="flex flex-col gap-8 w-full">
            <GetStarted />
            {isLg && <TrendingCoins />}
          </div>
        </div>
      </div>
      {isLg && <AlsoLike />}
      {!isLg && <TrendingCoins />}
    </>
  );
}
