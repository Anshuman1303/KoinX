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

export default function Home() {
  return (
    <div className="my-4 grid grid-rows-[auto_auto] lg:grid-cols-[2fr_1fr] gap-10">
      <div className="flex flex-col gap-8 w-full">
        <div className="box flex flex-col gap-8">
          <CoinHeading />
          <Price />
          <hr />
          <div className="w-full aspect-video">
            <TradingViewWidget />
          </div>
        </div>
        <TabMenu />
        <Performance />
        <Sentiment />
        <About />
        <Tokenomics />
        <Team />
      </div>
      <div className="flex flex-col gap-8 w-full">
        <GetStarted />
        <TrendingCoins />
      </div>
    </div>
  );
}
