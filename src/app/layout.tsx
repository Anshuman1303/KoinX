import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KoinX",
  description: "KoinX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans bg-white-200 font-semibold `}>
        <header className="sticky top-0 z-10">
          <Navbar />
        </header>
        <main className="px-[14px] lg:px-14">
          <Breadcrumbs />
          {children}
        </main>
        <footer></footer>
      </body>
    </html>
  );
}
