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
        <div className="md:tw-w-[900px] tw-flex tw-gap-[2rem] tw-gap-[4rem] tw-x-[2rem] tw-animate-scroll">
          <Image
            src={heroImg}
            alt=""
            className="tw-h-[400px] tw-object-cover md:tw-object-[unset] tw-aspect-[4320/1185] md:tw-h-[300px]"
          />
          <Image
            src={heroImg}
            alt=""
            className="tw-h-[400px] tw-object-cover md:tw-object-[unset] tw-aspect-[4320/1185] md:tw-h-[300px]"
          />
          <Image
            src={heroImg}
            alt=""
            className="tw-h-[400px] tw-object-cover md:tw-object-[unset] tw-aspect-[4320/1185] md:tw-h-[300px]"
          />
          <Image
            src={heroImg}
            alt=""
            className="tw-h-[400px] tw-object-cover md:tw-object-[unset] tw-aspect-[4320/1185] md:tw-h-[300px]"
          />
          <Image
            src={heroImg}
            alt=""
            className="tw-h-[400px] tw-object-cover md:tw-object-[unset] tw-aspect-[4320/1185] md:tw-h-[300px]"
          />
        </div>
      </div>
    </>
  );
}

export default HeroImageSlider;
