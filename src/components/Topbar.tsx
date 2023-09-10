"use client";
import React, { useState, useRef, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store-ts/hooks";
import {
  openMenu,
  closeMenu,
  selectMenuIsOpen,
} from "@/store-ts/features/menuOpenSlice";
import logo from "@/assets/images/logo.svg";
import logoWhite from "@/assets/images/logo-white.svg";
import Image from "next/image";
import Link from "next/link";

import facebookIcon from "@/assets/images/facebook-white-icon.svg";
import linkedinIcon from "@/assets/images/linkedin-white-icon.svg";
import twitterIcon from "@/assets/images/twitter-white-icon.svg";
import instaIcon from "@/assets/images/instagram-white-icon.svg";
import hamburgerIcon from "@/assets/images/hamburger-icon.svg";
import cancelIcon from "@/assets/images/cancel.svg";

import playstoreBtnImg from "@/assets/images/playstore-btn.svg";
import appleBtnImg from "@/assets/images/apple-btn.svg";
import { PrimaryTargetButton, WhiteTargetButton } from "./Buttons";

type Props = {
  onMenuToggle: (isOpen: boolean) => void;
};
const Topbar = ({ onMenuToggle }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const isMenuOpen = useAppSelector(selectMenuIsOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onMenuToggle(openMenu);
  }, [openMenu]);

  return (
    <>
      <div className="tw-w-full tw-max-w-[1440px] tw-absolute tw-top-[0] tw-left-[-50%] tw-translate-x-[50%]">
        {/* topbar lg */}
        <div className="tw-w-full tw-p-[4rem_8vw] tw-flex  tw-items-center md:tw-hidden md:tw-px-[1.25rem] tw-justify-between">
          <a href="/" className="tw-pr-[2rem] ">
            <Image src={logo} alt="" className="tw-h-[1.75rem] tw-w-[auto]" />
          </a>
          <div className="tw-flex  tw-items-center tw-gap-[1.5rem] tw-font-medium">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Condition</Link>
            <PrimaryTargetButton text="Try Traderlite" />
          </div>
        </div>
        {/* topbar sm */}
        <div className="tw-relative tw-w-full tw-bg-white tw-bg-bottom tw-items-center tw-p-[3rem_1.5rem] tw-hidden md:tw-flex">
          <div className="tw-w-full tw-flex tw-justify-between tw-items-center tw-gap-[1.5rem]">
            <a href="/" className="tw-min-w-[265px] tw-max-w-[360px] ">
              <Image src={logo} alt="" className="tw-h-[2rem] tw-w-[auto]" />
            </a>

            <div
              className="tw pointer"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <Image src={hamburgerIcon} alt="" className="tw-h-[1.25rem] " />
            </div>
          </div>
          {/* sidebar sm */}
          <div
            className={`tw-w-full tw-min-w-[265px] md:tw-min-w-[unset] tw-max-w-[265px] md:tw-absolute md:tw-left-[0] md:tw-top-[0] md:tw-z-[60] md:tw-min-h-[100vh] md:tw-transition-all tw-duration-[1000ms] md:tw-w-full  ${
              openMenu
                ? "md:tw-visible md:tw-max-w-[100vw] md:tw-bg-[#525252]/40"
                : "md:tw-max-w-[0] md:w-invisible md:tw-bg-[#525252]/0 md:tw-overflow-hidden"
            } `}
            onClick={() => setOpenMenu(false)}
          >
            <div
              className={`tw-w-full tw-bg-p1 tw-p-[1.25rem] tw-min-h-[100vh] tw-bg-no-repeat tw-bg-right`}
              style={{ backgroundImage: `url('/menu-bg.svg')` }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="tw-min-h-[100vh] tw-flex tw-flex-col">
                <div
                  className={`tw-flex tw-items-center tw-gap-[2rem] tw-justify-between tw-mt-[2rem]  ${
                    openMenu ? "md:tw-opacity-1" : "md:tw-opacity-0"
                  }`}
                >
                  <a href="/" className=" tw-max-w-[250px]">
                    <Image
                      src={logoWhite}
                      alt=""
                      className="tw-h-[1.75rem] tw-w-[auto]"
                    />
                  </a>
                  <Image
                    src={cancelIcon}
                    alt=""
                    className="tw-h-[1.5rem] pointer"
                    onClick={() => {
                      setOpenMenu(false);
                    }}
                  />
                </div>

                <div
                  className="tw-flex tw-flex-col tw-gap-[1rem] tw-mt-[3.5rem] tw-text-white"
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                >
                  <Link href="/">Home</Link>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/terms-and-conditions">Terms and Conditions</Link>
                </div>

                <WhiteTargetButton text="Try Tradelite" />

                <div className="tw-font-medium tw-mt-[auto]">
                  <div className="tw-flex tw-gap-[2rem]">
                    <Link href="#">
                      <Image
                        src={linkedinIcon}
                        alt=""
                        className="tw-h-[1.5rem] tw-w-[1.5rem]"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        src={instaIcon}
                        alt=""
                        className="tw-h-[1.5rem] tw-w-[1.5rem]"
                      />{" "}
                    </Link>
                    <Link href="#">
                      <Image
                        src={facebookIcon}
                        alt=""
                        className="tw-h-[1.5rem] tw-w-[1.5rem]"
                      />{" "}
                    </Link>
                    <Link href="#">
                      <Image
                        src={twitterIcon}
                        alt=""
                        className="tw-h-[1.5rem] tw-w-[1.5rem]"
                      />{" "}
                    </Link>
                  </div>

                  <div className="tw-flex tw-gap-[1rem] tw-items-center tw-mt-[2.5rem] tw-max-w-[418px]">
                    <a href="#" className="tw-w-[fit-content]">
                      <Image
                        src={playstoreBtnImg}
                        alt="download from playstore"
                        className="tw-h-[40px] tw-w-[auto]"
                      />
                    </a>
                    <a href="#" className="tw-w-[fit-content]">
                      <Image
                        src={appleBtnImg}
                        alt="download from apple store"
                        className="tw-h-[40px] tw-w-[auto]"
                      />
                    </a>
                  </div>

                  <div className="tw-mt-[2rem] tw-text-14 tw-text-white">
                    ©2023 CORE EDGE LEGACY LIMITED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {isModalOpen && currentModal === "new-template" && (
        <ModalContainer>
          <CreateTemplate />
        </ModalContainer>
      )} */}
      </div>
    </>
  );
};

export default Topbar;
