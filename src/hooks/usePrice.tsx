"use client";
import { useEffect, useState } from "react";

export default function usePrice() {
  const [data, setData] = useState();
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/simple/price?&ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true&x-cg-demo-api-key=${process.env.COIN_GECKO_KEY}`;
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
