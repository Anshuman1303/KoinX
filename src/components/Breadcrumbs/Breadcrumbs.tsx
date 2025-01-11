import { HiChevronDoubleRight } from "react-icons/hi2";

export default function Breadcrumbs() {
  return (
    <p className="font-light my-4">
      Cryptocurrencies <HiChevronDoubleRight className="inline-block my-auto" /> <b className="font-medium">Bitcoin</b>
    </p>
  );
}
