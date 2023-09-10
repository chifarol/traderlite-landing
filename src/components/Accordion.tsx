"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import closeIcon from "@/assets/images/minus-circle.svg";
import openIcon from "@/assets/images/plus-circle.svg";
import { accordionType } from "../types";
import Link from "next/link";

interface Props {
  data: accordionType[];
}

const Accordion = ({ data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [height, setHeight] = useState("tw-h-[120px]");
  const accContentRef = useRef(null);
  function toggleAcc(index: number) {
    console.log(currentIndex);
    if (index === currentIndex) {
      setCurrentIndex(-1);
      return;
    }
    setCurrentIndex(index);
    setTimeout(() => {
      setHeight("!tw-h-[auto]");
    }, 500);
  }
  return (
    <div className="tw-w-[100%] tw-max-w-[768px]" id="experiences">
      {/* 2nd */}
      {data.map((item, index) => (
        <div
          className={`tw-w-[100%] tw-p-[1.125rem] md:tw-p-[1rem] ${
            index !== 0 ? "tw-border-t tw-border-t-[#EAECF0]" : ""
          }`}
          key={index}
        >
          <div
            className={`border-0d tw-flex tw-justify-between tw-gap-[1rem] tw-items-center tw-mb-[.5rem] pointer`}
            onClick={() => toggleAcc(index)}
          >
            <h5 className="tw-text-18 tw-font-medium pointer">{item.title}</h5>
            {currentIndex === index ? (
              <Image src={closeIcon} alt="" height={24} width={24} />
            ) : (
              <Image src={openIcon} alt="" height={24} width={24} />
            )}
          </div>
          <div
            className={`tw-overflow-hidden tw-transition-all tw-duration-[500ms]
            ${
              currentIndex !== index
                ? "acc-drop tw-max-h-[0]"
                : "tw-max-h-[300px] acc-drop-close"
            }
            `}
            ref={accContentRef}
          >
            <div className="tw-text-[#667085] tw-pt-[.25rem]">
              {item.content}
            </div>
            {/* <ul
              className={`tw-list-disc tw-pl-[1rem] tw-pl-[2rem] tw-py-[2rem] md:tw-py-[1rem]`}
            >
              {item.content ||
                item.contentList?.map((listItem, index) => (
                  <li className="tw" key={index}>
                    {listItem}
                  </li>
                ))}
            </ul> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
