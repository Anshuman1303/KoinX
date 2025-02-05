"use client";
import { useEffect, useState } from "react";

export default function usePrice(coin: string) {
  const [data, setData] = useState();
  useEffect(() => {
    async function handleFetch() {
      let tempData;
      const url = `https://api.coingecko.com/api/v3/simple/price?&ids=${coin}&vs_currencies=inr,usd&include_24hr_change=true&x-cg-demo-api-key=${process.env.COIN_GECKO_KEY}`;
      const options = { method: "GET", headers: { accept: "application/json" } };

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
