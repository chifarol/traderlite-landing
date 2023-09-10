"use client";
import React, { useRef } from "react";
import Image from "next/image";
import heroImg from "@/assets/images/hero-image.png";

type Props = {};

function HeroImageSlider({}: Props) {
  const wrapSliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="tw-w-full tw-mt-[2rem] tw-pb-[1rem] tw-overflow-x-scroll scroll tw-whitespace-nowrap">
        <div className="tw-flex tw-items-center tw-x-[2rem] tw-animate-scroll">
          {Array.from(Array(10).keys()).map((item, index) => (
            <Image
              key={index}
              src={heroImg}
              alt=""
              className="tw-object-cover md:tw-object-[unset] tw-aspect-[4320/1185] "
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroImageSlider;
