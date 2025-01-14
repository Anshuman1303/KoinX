import usePrice from "@/hooks/usePrice";
import Chip from "../Chip/Chip";

export default function Price({ coin }: { coin: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const price: any = usePrice(coin);
  if (price)
    return (
      <div>
        <div className="flex flex-row gap-8 items-center">
          <h1 className="text-[24px]">&#36;{price[coin]?.usd?.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h1>
          <div className="flex flex-row items-center gap-2">
            <Chip value={price[coin]?.usd_24h_change} />
            <h2>&#40;24H&#41;</h2>
          </div>
        </div>
        <h2 className="text-[16px] text-black-100 font-medium">
          &#8377; {price[coin]?.inr?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </h2>
      </div>
    );
  return <p>loading</p>;
}
