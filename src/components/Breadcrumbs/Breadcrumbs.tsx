import { HiChevronDoubleRight } from "react-icons/hi2";

export default function Breadcrumbs({ coin }: { coin: string }) {
  if (coin)
    return (
      <p className="font-light my-4 capitalize">
        Cryptocurrencies <HiChevronDoubleRight className="inline-block my-auto" /> <b className="font-medium">{coin}</b>
      </p>
    );
}
