"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Carousel({ children, className }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [xPositions, setXPositions] = useState<number[]>([]);
  const [elementIndex, setElementIndex] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const childElements = containerRef.current.children;
      console.log([...childElements]);
      const positions = Array.from(childElements).map((child) => {
        const element = child as HTMLElement;
        console.log(element.getBoundingClientRect().x - (containerRef?.current?.getBoundingClientRect().x || 0));
        return element.getBoundingClientRect().x - (containerRef?.current?.getBoundingClientRect().x || 0);
      });
      console.log(positions);
      setXPositions(positions);
    }
  }, []);

  useEffect(() => {
    console.log(elementIndex);
    console.log(xPositions);
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: xPositions[elementIndex], behavior: "smooth" });
    }
  }, [elementIndex, xPositions]);

  return (
    <div className="relative">
      <div className={`no-scrollbar flex flex-row overflow-x-scroll ${className}`} ref={containerRef}>
        {children}
      </div>
      <button
        className="absolute bg-white-100 left-2 top-1/2 -translate-y-1/2 p-4 rounded-full shadow-xl"
        onClick={() => setElementIndex(elementIndex <= 0 ? xPositions.length - 1 : elementIndex - 1)}>
        <IoIosArrowBack />
      </button>
      <button
        className="absolute bg-white-100 right-2 top-1/2 -translate-y-1/2 p-4 rounded-full shadow-xl"
        onClick={() => setElementIndex(elementIndex + 1 >= xPositions.length ? 0 : elementIndex + 1)}>
        <IoIosArrowForward />
      </button>
    </div>
  );
}
