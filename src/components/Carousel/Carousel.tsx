"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Carousel({ children, className }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [xPositions, setXPositions] = useState<number[]>([]);
  const [elementIndex, setElementIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [scrollStart, setScrollStart] = useState(true);
  const [scrollEnd, setScrollEnd] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const handleResize = () => {
      if (isMounted && container) {
        container.scrollTo({ left: 0 });
        const childElements = container.children;
        const positions = Array.from(childElements).map((child) => {
          const element = child as HTMLElement;
          return Math.floor(element.getBoundingClientRect().x - (containerRef?.current?.getBoundingClientRect().x || 0));
        });
        setXPositions(positions);
      }
    };
    if (isMounted && container) {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [isMounted]);

  useEffect(() => {
    const container = containerRef.current;
    let isScrolling: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        if (!container || xPositions.length === 0) return;
        console.log(container?.scrollLeft, xPositions);
        let currentIndex = xPositions.findIndex((e) => e - container?.scrollLeft < 1 && e - container?.scrollLeft > -1);
        if (currentIndex != -1) {
          setElementIndex(currentIndex);
        } else {
          currentIndex = xPositions.findIndex((e) => e > (container?.scrollLeft || 0)) - 0.5;
          setElementIndex(currentIndex);
        }
        setScrollStart(container?.scrollLeft === 0);
        setScrollEnd(container.scrollWidth - container.scrollLeft - container.clientWidth < 1);
      }, 150);
    };

    if (isMounted && container) {
      container.addEventListener("scroll", handleScroll);
      return () => container?.removeEventListener("scroll", handleScroll);
    }
  }, [isMounted, xPositions]);

  useEffect(() => {
    const container = containerRef.current;
    if (container && xPositions[elementIndex] !== undefined) {
      if (elementIndex % 1 !== 0) return;
      container.scrollTo({ left: xPositions[elementIndex], behavior: "smooth" });
    }
  }, [elementIndex, xPositions]);

  function handleSetElementIndex(dir: 1 | -1) {
    let newIndex;
    if (elementIndex % 1 === 0) {
      newIndex = elementIndex + dir;
    } else {
      newIndex = elementIndex + 0.5 * dir;
    }
    if (newIndex >= xPositions.length) newIndex = xPositions.length - 1;
    if (newIndex < 0) newIndex = 0;
    setElementIndex(newIndex);
  }
  if (!isMounted) {
    return <p>Loading...</p>;
  }

  return (
    <div className="relative">
      <div className={`no-scrollbar flex flex-row overflow-x-scroll ${className}`} ref={containerRef}>
        {children}
      </div>
      <button
        className={`transition-opacity absolute bg-white-100 left-2 top-1/2 -translate-y-1/2 p-4 rounded-full shadow-xl ${
          scrollStart ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => !scrollStart && handleSetElementIndex(-1)}>
        <IoIosArrowBack />
      </button>
      <button
        className={`transition-opacity absolute bg-white-100 right-2 top-1/2 -translate-y-1/2 p-4 rounded-full shadow-xl  ${
          scrollEnd ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        onClick={() => !scrollEnd && handleSetElementIndex(1)}>
        <IoIosArrowForward />
      </button>
    </div>
  );
}
