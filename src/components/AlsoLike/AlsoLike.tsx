import CoinList from "../CoinList/CoinList";

export default function AlsoLike() {
  return (
    <div className="bg-white-100 lg:p-16 flex flex-col gap-5">
      <h1>You May Also Like</h1>
      <CoinList />
      <h1 className="mt-[10px]">Trending Coins</h1>
      <CoinList />
    </div>
  );
}
