"use client";
import React from "react";
import Link from "next/link";

type Props = { text?: string };

export function Button({}: Props) {
  return (
    <Link
      href="/#traderlite"
      className={`tw-mt-[2.75rem] tw-text-center tw-grid tw-place-items-center tw-bg-p1 tw-text-white tw-px-[1rem] tw-h-[50px] tw-rounded-[6px] tw-w-[fit-content]`}
      onClick={(e) => {
        document
          .querySelector("#traderlite")
          ?.scrollIntoView({ behavior: "smooth" });
        // tradeliteRef.current?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Download Tradelite
    </Link>
  );
}
export function PrimaryTargetButton({ text = "Download Tradelite" }: Props) {
  return (
    <Link
      href="/#traderlite"
      className={`tw-text-center tw-grid tw-place-items-center tw-bg-p1 tw-text-white tw-px-[1rem] tw-h-[50px] tw-rounded-[6px] tw-w-[fit-content]`}
      onClick={(e) => {
        document
          .querySelector("#traderlite")
          ?.scrollIntoView({ behavior: "smooth" });
        // tradeliteRef.current?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {text}
    </Link>
  );
}
export function WhiteTargetButton({ text = "Download Tradelite" }: Props) {
  return (
    <Link
      href="/#traderlite"
      className={`tw-text-center tw-grid tw-place-items-center tw-bg-white tw-text-n1 tw-w-[fit-content] tw-mt-[2rem] tw-px-[2rem] tw-h-[40px] tw-rounded-[6px]`}
      onClick={(e) => {
        document
          .querySelector("#traderlite")
          ?.scrollIntoView({ behavior: "smooth" });
        // tradeliteRef.current?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {text}
    </Link>
  );
}
