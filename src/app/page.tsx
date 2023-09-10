import Image from "next/image";
import playstoreBtnImg from "@/assets/images/playstore-btn.svg";
import appleBtnImg from "@/assets/images/apple-btn.svg";
import playstoreWhiteBtnImg from "@/assets/images/playstore-white-btn.svg";
import appleWhiteBtnImg from "@/assets/images/apple-white-btn.svg";
import heroImg from "@/assets/images/hero-image.png";
import sec2aImg from "@/assets/images/sec2a.png";
import sec2bImg from "@/assets/images/sec2b.png";
import sec2cImg from "@/assets/images/sec2c.png";
import sec3Img from "@/assets/images/sec3.png";
import sec4Img from "@/assets/images/sec4.png";
import Link from "next/link";
import Accordion from "@/components/Accordion";
import { PrimaryTargetButton } from "@/components/Buttons";
// import { useRef } from "react";

export default function Home() {
  // const tradeliteRef = useRef<HTMLDivElement | null>(null);
  const sec2Cards = [
    {
      title:
        " ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ Instant Trading: Where Speed Meets Success",
      image: sec2aImg,
      body: "Experience Real-Time Wallet Balance Updates and Instant Notifications with our Instant Trading Platform. Stay Informed and Make Informed Decisions, Anytime, Anywhere",
    },
    {
      title:
        "Unlock Abundant Choices with Our Diverse Gift Card and Crypto Selection",
      image: sec2bImg,
      body: "Explore an extensive and diverse collection of gift cards encompassing a wide spectrum of retailers and beloved brands. Elevate Your Gifting and Savings Experience with Our Platform, Where Variety and Convenience Converge to Empower Your Every Shopping and Gifting Endeavor.",
    },
    {
      title: "Your Safety, Our Commitment: Safe and Secure Transactions",
      image: sec2cImg,
      body: "We prioritize your safety. Our platform is fortified with advanced security measures, including encryption and a secure escrow service. 24/7 monitoring, educational resources, and responsive support ensure your peace of mind. Join us for secure gift card and cryptocurrency trading.",
    },
  ];

  const accList = [
    {
      title: "What types of gift cards can I sell on TradeLite",
      content:
        "You can sell a variety of gift cards on TradeLite, including retail, restaurant, entertainment, fashion, tech, travel, and more. Check TradeLite's guidelines for specific brands and restrictions.",
    },
    {
      title:
        "Can I use my own designs for printing, or do I have to use the templates?",
      content:
        "Simply sign up for an account on our platform. Choose a template or start from scratch using our intuitive design software. Customize to your heart's content and bring your vision to life.",
    },
    {
      title: "How do I get paid for my sold gift cards?",
      content:
        "You receive payment through TradeLite after a successful trade.",
    },
    {
      title: "Is my personal and financial information secure on TradeLite?",
      content:
        "Yes, TradeLite takes your security seriously. We use robust encryption and security measures to protect your personal and financial information, ensuring a secure trading environment",
    },
    {
      title: "What fees are associated with using TradeLite?",
      content:
        "Fees can vary based on the specific services and transactions you use on our platform. We recommend checking our platform for detailed fee information to understand any charges associated with your trades.",
    },
    {
      title: "How can I start P2P trading of crypto for Naira or Ghana cedis?",
      content:
        "To begin P2P trading, sign up on our platform and complete the necessary verification steps. Then, explore our P2P marketplace to find suitable trading partners and initiate transactions",
    },
    {
      title:
        "What precautions should I take when engaging in P2P crypto trading?",
      content:
        "In P2P crypto trading, it's crucial to verify the identity and reputation of your trading partners. Use secure payment methods, conduct trades within the platform, and be cautious of potential fraud or scams. Our platform provides guidelines to help you trade safely.",
    },
  ];
  return (
    <main className="tw-w-full">
      {/* hero section */}
      <div
        className="tw-bg-cover tw-bg-cnter tw-bg-top tw-bg-no-repeat tw-pt-[64px] md:tw-items-start"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
          backgroundSize: "80%",
        }}
      >
        <div className="tw-flex tw-flex-col tw-items-center tw md:tw-px-[1rem] md:tw-items-start">
          <h2
            className="tw-font-black tw-max-[1141px] tw-txt-70 tw-text-center md:!tw-text-32 md:tw-text-left"
            style={{ fontSize: "4.8vw", lineHeight: "6.5vw" }}
          >
            Unlocking the Future of Giftcard & Cryptocurrency Trading.
          </h2>
          <p className="tw-text-18 tw-max-w-[699px] tw-text-center tw-mt-[1rem] md:tw-text-left">
            Tradelite is your ultimate destination for all things
            cryptocurrency, our platform is here to guide, educate, and empower
            you.{" "}
          </p>
          <div className="tw-flex tw-gap-[1.5rem] tw-items-center tw-mt-[2.5rem] tw-max-w-[418px] md:tw-items-start">
            <a href="#" className="tw-w-[fit-content]">
              <Image
                src={playstoreBtnImg}
                alt="download from playstore"
                className="tw-h-[60px] md:tw-h-[40px] tw-w-[auto]"
              />
            </a>
            <a href="#" className="tw-w-[fit-content]">
              <Image
                src={appleBtnImg}
                alt="download from apple store"
                className="tw-h-[60px] md:tw-h-[40px] tw-w-[auto]"
              />
            </a>
          </div>
        </div>
        <div className="tw-w-full tw-mt-[2rem] tw-pb-[1rem] tw-overflow-x-scroll scroll tw-whitespace-nowrap">
          <div className="md:tw-w-[900px] tw-flex tw-gap-[2rem] tw-x-[2rem]">
            <Image
              src={heroImg}
              alt=""
              className="tw-h-[400px] tw-object-cover md:tw-object-[unset] tw-aspect-[4320/1185] md:tw-h-[300px]"
            />
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="tw-p-[6.25rem_8vw] tw-flex tw-flex-col tw-items-center md:tw-px-[1.25rem] md:tw-items-start">
        <h6 className="tw-text-18 tw-text-p1 tw-font-medium">
          FASTEST SOLUTION
        </h6>
        <div className="tw-text-40 tw-font-bold tw-mt-[1rem] tw-text-center md:tw-text-32 md:tw-text-left">
          Your Ultimate Gift Card Destination - Accessible to Anyone, Anywhere,
          Anytime
        </div>
        <div className="tw-grid tw-grid-cols-autoFit_250 tw-gap-[2rem] tw-mt-[5.625rem] md:tw-mt-[2rem]">
          {sec2Cards.map((card, index) => (
            <div className="w-mt-[auto]" key={index}>
              <h6 className="tw-text-20 tw-font-bold">{card.title}</h6>
              <Image
                src={card.image}
                alt=""
                className="tw-my-[1.5rem] tw-h-[283px] tw-w-full tw-object-cover tw-rounded-[8px]"
              />
              <h6 className="">{card.body}</h6>
            </div>
          ))}
        </div>
      </div>

      {/* 3rd section */}
      <div className="tw-p-[6.25rem_8vw] tw-grid tw-grid-cols-2 tw-gap-[2.5rem] md:tw-px-[0] md:tw-grid-cols-1">
        <div className="tw-w-full">
          <Image
            src={sec3Img}
            alt=""
            className="tw-h-[536px] tw-w-full tw-object-cover tw-rounded-[8px]"
          />
        </div>
        <div className="tw md:tw-px-[1.25rem]">
          <h6 className="tw-text-18 tw-text-p1 tw-font-medium">ABOUT US</h6>
          <div className="tw-text-40 tw-font-bold tw-mt-[1rem] tw-mt-[.75rem] md:tw-text-32">
            Your Ultimate Gift Card Destination - Accessible to Anyone,
            Anywhere, Anytime
          </div>
          <p className="tw-text-18 tw-mt-[1rem] md:tw-text-16 tw-mb-[2.75rem] ">
            Welcome to our comprehensive platform, where you gain the knowledge,
            tools, and resources necessary to navigate the exciting realms of
            gift card and cryptocurrency trading with absolute confidence. We
            empower you to engage in secure and efficient trading, ensuring your
            journey in this dynamic landscape is both seamless and rewarding
          </p>

          <PrimaryTargetButton />
        </div>
      </div>

      {/* 4th section */}
      <div
        className="tw-p-[6.25rem_8vw] md:tw-p-[0]"
        id="traderlite"
        // ref={tradeliteRef}
      >
        <div className="tw-grid tw-grid-cols-2 tw-gap-[2.5rem] tw-min-h-[400px] tw-bg-p1 tw-rounded-[12px] md:tw-grid-cols-1 md:tw-h-[unset] md:tw-rounded-[0]">
          <div className="tw-pl-[8vw] tw-py-[2rem] tw-my-[auto] md:tw-pt-[3rem] md:tw-px-[1rem]">
            <div className="tw-text-40 tw-text-white tw-font-bold tw-mt-[.75rem] md:tw-text-32">
              Download Tradelite today and enjoy.
            </div>
            <p className="tw-text-white tw-mt-[1.5rem] tw-max-w-[90%] md:tw-mt-[1rem]">
              Download Tradelite now and embark on a journey of seamless,
              secure, and rewarding trading. It&apos;s time to turn your assets
              into opportunities!
            </p>
            <div className="tw-flex tw-gap-[1rem] tw-items-center tw-mt-[2.5rem] tw-max-w-[418px]">
              <a href="#" className="tw-w-[fit-content]">
                <Image
                  src={playstoreWhiteBtnImg}
                  alt="download from playstore"
                  className="tw-h-[60px] tw-w-auto md:tw-h-[40px]"
                />
              </a>
              <a href="#" className="tw-w-[fit-content]">
                <Image
                  src={appleWhiteBtnImg}
                  alt="download from apple store"
                  className="tw-h-[60px] tw-w-auto md:tw-h-[40px]"
                />
              </a>
            </div>
          </div>
          <div className="tw-w-full tw-flex tw-flex-col">
            <Image
              src={sec4Img}
              alt=""
              className="tw-mt-[auto] tw-w-full tw-object-cover tw-rounded-[8px]"
            />
          </div>
        </div>
      </div>

      {/* 5th section */}
      <div className="tw-w-full tw-p-[6.25rem_8vw] md:tw-px-[.5rem]">
        <div className=" tw-flex tw-flex-col tw-items-center tw-gap-[4.5rem] md:tw-gap-[1.5rem]">
          {/* 1st */}
          <div className="tw-flex tw-flex-col tw-text-center">
            <h4 className="tw-font-bold tw-text-36 md:tw-text-32">
              Frequently asked questions
            </h4>
            <p className="tw-text-n1 tw-max-w-[712px] tw-text-center tw-mt-[1.5rem] md:tw-text-14">
              Everything you need to know about Tradelite App
            </p>
          </div>

          <div className="">
            <Accordion data={accList} />
          </div>
        </div>
      </div>
    </main>
  );
}
