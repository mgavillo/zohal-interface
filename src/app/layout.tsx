import type { Metadata } from "next";

import { robotoMono } from "@zohal/app/_helpers/fonts";

import Header from "./_components/header";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  description:
    "Next-generation Perpetual Exchange on Starknet. Revolutionizing User Experience.",
  title: "Zohal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={robotoMono.className} lang="en">
      <body>
        <div className="flex h-full flex-col">
          <Providers>
            <Header />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
