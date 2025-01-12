"use client";

import { MouseEventHandler, useState } from "react";

function TabItem({ title, active, onClick }: { title: string; active?: boolean; onClick: MouseEventHandler<HTMLLIElement> }) {
  return (
    <li className={`cursor-pointer text-nowrap ${active && "text-blue-400 underline-offset-[17px] underline"}`} onClick={onClick}>
      {title}
    </li>
  );
}

const tabItems = ["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"];

export default function TabMenu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ul className="no-scrollbar flex flex-row gap-8 text-[16px] text-black-600 border-b border-white-400 h-12 items-center px-1 overflow-x-auto w-full">
      {tabItems.map((tabItem, index) => (
        <TabItem key={index} onClick={() => setSelectedIndex(index)} active={selectedIndex === index} title={tabItem} />
      ))}
    </ul>
  );
}
