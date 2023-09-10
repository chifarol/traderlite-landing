"use client";
import "./globals.css";
import "@/assets/css/satoshi.css";
import type { Metadata } from "next";
import { Providers } from "@/store-ts/Provider";
import Topbar from "@/components/Topbar";
// import Footer from "@/components/Footer";
import { useState } from "react";
import Footer from "@/components/Footer";

const metadata: Metadata = {
  title: "Every Event",
  description: "Every event",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/site-icon.png" type="image/x-icon" />
      </head>
      <body
        className={` ${
          menuIsOpen ? "tw-max-h-[100vh] tw-overflow-y-hidden" : ""
        }`}
      >
        <Providers>
          <Topbar
            onMenuToggle={(openMenu) => {
              setMenuIsOpen(openMenu);
            }}
          />
          <div className="tw-pt-[178px] md:tw-pt-[100px]">{children}</div>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
