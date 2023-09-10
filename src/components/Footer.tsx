import React from "react";
import logo from "../assets/images/logo.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";
import linkedinIcon from "../assets/images/linkedin-icon.svg";
import instagramIcon from "../assets/images/instagram-icon.svg";
import twitterIcon from "../assets/images/twitter-icon.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="tw-bg-[#EDF4FF] tw-p-[3.5rem_8vw] md:tw-p-[4.5rem_1.5rem] md:tw-flex-col">
      <div className="tw-flex tw-flx-wrap tw-itms-center tw-justify-between tw-gap-[2rem] md:tw-flex-col">
        <div className="tw-max-w-[380px]">
          <a href="/" className="tw-pr-[2rem] ">
            <Image src={logo} alt="" className="tw-h-[2rem] tw-w-[auto]" />
          </a>
          <p className="tw-mt-[1.5rem] tw-text-18">
            Tradelite is committed to being your ultimate destination for all
            things cryptocurrency. Our platform is here to guide, educate, and
            empower you in the exciting world of digital assets.
          </p>
          {/* follow us */}
          <div className="tw-font-medium tw-mt-[4rem]">
            <div className="tw-flex tw-gap-[2rem]">
              <Link href="#">
                <Image
                  src={linkedinIcon}
                  alt=""
                  className="tw-h-[2rem] tw-w-[2rem]"
                />
              </Link>
              <Link href="#">
                <Image
                  src={instagramIcon}
                  alt=""
                  className="tw-h-[2rem] tw-w-[2rem]"
                />{" "}
              </Link>
              <Link href="#">
                <Image
                  src={twitterIcon}
                  alt=""
                  className="tw-h-[2rem] tw-w-[2rem]"
                />{" "}
              </Link>
              <Link href="#">
                <Image
                  src={facebookIcon}
                  alt=""
                  className="tw-h-[2rem] tw-w-[2rem]"
                />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-flex-wrap tw-gap-[1.5rem] md:tw-mt-[3rem]">
          {/* 2nd */}
          <div className="tw">
            <div className="tw">
              <h5 className="tw-text-20 tw-font-bold tw-mb-[1rem] tw-">
                Stay connected
              </h5>
              <div className="tw-h-[2px] tw-bg-p1 tw-w-[30%] tw-mt-[-.5rem]"></div>
            </div>
            <div className="tw-flex tw-flex-col tw-gap-[1rem] tw-text-[#575757] tw-mt-[1rem]">
              <p className="tw-text-n1">
                {" "}
                Get started today and watch your assets thrive
              </p>
              <input
                type="text"
                className="tw-border-0 tw-bg-[transparent] tw-border-b tw-py-[.5rem] tw-text-14"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="tw-border-0 tw-bg-[transparent] tw-border-b tw-py-[.5rem] tw-text-14"
                placeholder="Email Address"
              />
              <Link
                href="#"
                className={`tw-mt-[.75rem] tw-text-center tw-grid tw-place-items-center tw-bg-p1 tw-text-white tw-px-[2rem] tw-h-[50px] tw-rounded-[6px] tw-w-[fit-content]`}
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-border-t tw-border-t-n1/40 tw-mt-[3rem] tw-pt-[2.5rem] tw-flex tw-justify-between tw-gap-[2rem] md:tw-flex-col">
        <p className="tw-text-14">©Tradelite.com 2022. All Rights Reserved.</p>
        <div className="tw-flex tw-gap-[1rem]">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms of Use</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
