"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
// TradingViewWidget.jsx
import useCoinData from "@/hooks/useCoinData";
import React, { useEffect, useRef, memo, useState } from "react";

function TradingViewWidget({ coin }: { coin: string }) {
  const container = useRef<HTMLDivElement>(null);
  const coinData: any = useCoinData(coin);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && coinData) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
      {
        "autosize": true,
        "symbol": "${coinData?.symbol?.toUpperCase()}USD",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "withdateranges": true,
        "range": "1M",
        "allow_symbol_change": false,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
        }`;
      container?.current?.appendChild(script);
    }
  }, [isMounted, coinData]);
  if (coinData && isMounted)
    return (
      <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
        <div className="tradingview-widget-container__widget" style={{ height: "100%", width: "100%" }}></div>
      </div>
    );
  return <p>loading</p>;
}

export default memo(TradingViewWidget);
