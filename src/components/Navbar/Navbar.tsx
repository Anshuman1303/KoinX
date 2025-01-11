"use client";
import Image from "next/image";
import Item from "@/components/Navbar/Item";
import Button from "../Button/Button";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import useBreakpoints from "@/hooks/useBreakpoints";

const itemsData = [
  { title: "Crypto Taxes", href: "/" },
  { title: "Free Tools", href: "/" },
  { title: "Resource Center", href: "/" },
];

function ItemList({ className }: { className?: string }) {
  return (
    <ul className={`flex ${className}`}>
      {itemsData.map((item, index) => (
        <Item key={index} title={item.title} href={item.href} />
      ))}
      <Button
        className="bg-[linear-gradient(-92deg,theme(colors.blue.100),theme(colors.blue.200))] from-[9%] to-85% text-white-100"
        title="Get Started"
      />
    </ul>
  );
}
export default function Navbar() {
  const isLg = useBreakpoints("lg");
  const [itemsExpanded, setItemsExpanded] = useState(false);
  return (
    <nav className="w-full h-16 lg:h-20 bg-white-100 lg:border-b border-white-300 px-6 lg:px-[60px] flex flex-row justify-between items-center relative">
      <Image src={"/images/logo.png"} width={193} height={48} alt={"KoinX Logo"} className="w-[81px] lg:w-24 h-auto"></Image>
      <ItemList
        className={
          isLg
            ? "flex-row gap-8 items-center"
            : `bg-white-100 border-b border-white-300 absolute w-full left-0 -z-10 flex-col py-4 px-[inherit] transition-transform -bottom-[1px] gap-4 ${
                itemsExpanded && "translate-y-[calc(100%-1px)]"
              }`
        }
      />
      {!isLg && (
        <button
          onClick={() => {
            setItemsExpanded(!itemsExpanded);
          }}>
          <FaBars size={24} />
        </button>
      )}
    </nav>
  );
}
