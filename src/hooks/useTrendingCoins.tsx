"use client";
import { useEffect, useState } from "react";

export default function useTrendingCoins() {
  const [data, setData] = useState();
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/search/trending?x-cg-demo-api-key=${process.env.COIN_GECKO_KEY}`;
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);
  if (data) return data;
}
