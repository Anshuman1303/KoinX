"use client";
import { useEffect, useState } from "react";

export default function useCoinData(coin: string) {
  const [data, setData] = useState();
  useEffect(() => {
    async function handleFetch() {
      const url = `https://api.coingecko.com/api/v3/coins/${coin}?x-cg-demo-api-key=${process.env.COIN_GECKO_KEY}`;
      const options = { method: "GET", headers: { accept: "application/json" } };
      let tempData;
      await fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          tempData = data;
        })
        .catch((err) => {
          console.error(err);
          tempData = undefined;
        });
      setData(tempData);
    }
    handleFetch();
  }, []);
  if (data) return data;
}
