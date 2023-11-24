"use client";
import slide1 from "@/public/slide1.webp";
import slide2 from "@/public/slide2.webp";
import icon from "@/public/icon.png";
import demo from "@/public/demo.webp";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { FaRobot, FaLightbulb, FaPen } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
export default function Home() {
  const [index, setIndex] = useState(0);
  const contents = [
    {
      title: "Cultivating Wealth through Strategic Investments",
      description:
        "Grow Your Money Wisely: Our Strategic Investments Cultivate Wealth with Care and Expertise.",
      img: slide1,
    },
    {
      title: "Your Journey to Financial Excellence Begins Here.",
      description:
        "Seed your income growth today with investments starting with minimum across diverse instruments.",
      img: slide2,
    },
  ];

  const projecteds = [
    {
      amount: "$7T",
      description:
        "Projected global investment in direct digital transformation efforts from 2020 to 2023.",
    },
    {
      amount: "$11T",
      description:
        "Projected transaction value of the digital payments market by 2026.",
    },
    {
      amount: "$384B",
      description:
        "Projected size of the global blockchain technology market by 2028.",
    },
  ];

  const services = [
    {
      icons: <MdOutlineManageAccounts />,
      title: "ROBO Advisor",
      description:
        "Robo advisors are digital medium that provide automated, algorithmic investment services with minimal human supervision. It often focus on passive indexing strategies based on modern portfolio theory and are typically inexpensive and accessible to retail investors.",
    },
    {
      icons: <FaComputer />,
      title: "Futuristic AI Trading",
      description:
        "Artificial intelligence (AI) is becoming increasingly prevalent in our everyday lives, and it is also changing the way we invest and trade. AI trading systems use complex algorithms to automate the investment process and remove the emotional element from decision-making, allowing for more data-driven and efficient trades.",
    },
    {
      icons: <FaLightbulb />,
      title: "Machine Learning",
      description:
        "Machine learning empowers traders to accelerate and automate one of the most complex, time-consuming, and challenging aspects of algorithmic trading, providing a competitive advantage beyond rules-based trading.",
    },
    {
      icons: <FaRobot />,
      title: "AI Manager",
      description:
        "Investing should always be this easy. With diverse portfolios under Al, you can invest like a pro (and avoid the trouble of stock selection).At ETFore, we use artificial intelligence to manage trading in a highly effective manner. We use our technology to support every dollar you invest, whether it is through automatic trading, ongoing monitoring or reinvesting.",
    },
  ];

  const instruments = [
    {
      logo: "EQ",
      title: "Stocks",
    },
    {
      logo: "ET",
      title: "ETFs",
    },
    {
      logo: "CM",
      title: "Commodities",
    },
    {
      logo: "MF",
      title: "Mutual Funds",
    },
    {
      logo: "FR",
      title: "Forex",
    },
    {
      logo: "BO",
      title: "Bonds",
    },
    {
      logo: "CR",
      title: "Crypto",
    },
    {
      logo: "LO",
      title: "Listed Options",
    },
    {
      logo: "FU",
      title: "Futures",
    },
  ];

  const themes = [
    {
      title: "Privacy",
      description:
        "Protocols focused on providing user privacy within the blockchain and application.",
      icons: "",
    },
    {
      title: "Data",
      description:
        "Protocols providing data on chain application via off chain computing or other SaaS service typically provided by cloud provider such as AWS.",
      icons: "",
    },
    {
      title: "Store of Value",
      description:
        "Protocols designed to have strong monetary policies and which provide a secure cryptographic network through which to store value.",
      icons: "",
    },
    {
      title: "Smart Contract Platforms",
      description:
        "Decentralized Blockchains with smart contract functionality upon which applications can be built.",
      icons: "",
    },
    {
      title: "Payments",
      description:
        "Protocols that facilitate decentralized peer to peer transaction on blockchain.",
      icons: "",
    },
    {
      title: "Metaverse",
      description:
        "Games and virtual world integrated with blockchain technology to allow users to own their assets.",
      icons: "",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="w-full h-full ">
      <header className="w-full min-h-[calc(100%-96px)] grid grid-rows-3 gap-4 px-4 sm:px-16 md:px-32  ">
        <AnimatePresence mode="wait">
          <m.div
            key={contents[index].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="row-span-2 w-full grid grid-cols-1 lg:grid-cols-3 gap-4  mt-0 mb-0  max-w-[1000px] mx-auto "
          >
            <m.div className="relative max-h-[300px] lg:max-h-[500px] w-full h-screen object-cover col-span-2 mb-0 mt-auto mx-auto">
              <Image
                src={contents[index].img}
                alt=""
                fill
                className="object-contain object-bottom"
                priority
              />
            </m.div>
            <m.div className="flex flex-col gap-1 max-w-[300px] mb-0 mt-auto flex-1 mx-auto">
              <p className="text-3xl lg:text-5xl text-primary font-semibold">
                {contents[index].title}
              </p>
              <p>{contents[index].description}</p>
              <Button
                className="text-xs font-semibold text-white"
                color="primary"
                variant="shadow"
                radius="full"
              >
                Get Started
              </Button>
            </m.div>
          </m.div>
        </AnimatePresence>
        <div className="bg-background/60 max-w-[600px] mx-auto mb-auto mt-0 h-fit w-full flex flex-row gap-4 rounded-xl shadow-md p-4">
          {projecteds.map((projected) => {
            return (
              <div
                key={projected.description}
                className="flex flex-col gap-2 flex-1"
              >
                <p className="text-primary font-semibold text-2xl">
                  {projected.amount}
                </p>
                <p className="">{projected.description}</p>
              </div>
            );
          })}
        </div>
      </header>
      <div className="w-full py-12 px-4 sm:px-16 md:px-32 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => {
            return (
              <div
                key={service.title}
                className="rounded-xl shadow-md p-4 flex gap-4 flex-col bg-gradient-to-b hover:from-background hover:to-primary/10 from-background/30 to-background/30 "
              >
                <div className="text-xl bg-primary rounded-full p-4 w-fit mx-auto text-white shadow-md">
                  {service.icons}
                </div>
                <p className="text-2xl font-semibold text-primary">
                  {service.title}
                </p>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="grid grid-cols-1 xl:grid-cols-3  mx-auto">
          <div className="relative xl:col-span-2 ">
            <Image src={demo} alt="" />
          </div>
          <div className="flex flex-col gap-2 my-auto mr-auto ml-auto lg:ml-0 ">
            <p className="text-primary text-2xl font-semibold">
              Introducing our Handpicked Instruments: to Diversify and Grow Your
              Portfolio
            </p>
            <div className="grid sm:grid-cols-3 gap-2">
              {instruments.map((ins) => {
                return (
                  <Button
                    key={ins.title}
                    radius="full"
                    className="text-xs  font-semibold text-white justify-start"
                    variant="shadow"
                    color="primary"
                    startContent={
                      <div className="aspect-square bg-white rounded-full h-[calc(100%-8px)] text-primary flex items-center justify-center font-bold text-base">
                        {ins.logo}
                      </div>
                    }
                  >
                    {ins.title}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex flex-col gap-4">
          <p className="text-3xl sm:text-5xl font-semibold text-primary text-center">
            Single Asset Product Theme
          </p>
          <div className="grid sm:grid-cols-3 sm:grid-rows-3 gap-4 sm:grid-flow-col">
            <>
              {themes.slice(0, 3).map((theme) => {
                return (
                  <div
                    key={theme.title}
                    className="m-auto p-4 rounded-xl bg-gradient-to-b hover:from-background hover:to-primary/10 from-background/30 to-background/30  shadow-md flex flex-col gap-4 self-stretch h-full w-full"
                  >
                    <p className="text-2xl font-semibold text-primary mx-auto text-center w-full">
                      {theme.title}
                    </p>
                    <p>{theme.description}</p>
                  </div>
                );
              })}
            </>
            <div className=" sm:row-span-3 my-auto max-w-[300px] mx-auto">
              <Image src={icon} alt="D'LUXE" />
            </div>
            <>
              {themes.slice(3, 6).map((theme) => {
                return (
                  <div
                    key={theme.title}
                    className="m-auto p-4 rounded-xl bg-gradient-to-b hover:from-background hover:to-primary/10 from-background/30 to-background/30  shadow-md flex flex-col gap-4 h-full  w-full"
                  >
                    <p className="text-2xl font-semibold text-primary mx-auto text-center w-full">
                      {theme.title}
                    </p>
                    <p>{theme.description}</p>
                  </div>
                );
              })}
            </>
          </div>
        </div>
      </div>
      <footer className="bg-background/75 py-16 flex flex-col w-full px-4 sm:px-16 md:px-32 gap-8">
        <div className="grid grid-cols-3 gap-8 w-full max-w-[1000px] mx-auto">
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-primary font-semibold text-base border-b-1 border-primary">
              Navigation
            </p>
            <Link underline="hover" href="/" size="sm">
              Home
            </Link>
            <Link underline="hover" href="/" size="sm">
              About Us
            </Link>
            <Link underline="hover" href="/" size="sm">
              Resources
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <p className="text-primary font-semibold text-base border-b-1 border-primary">
              Policies
            </p>
            <Link underline="hover" href="/" size="sm">
              AML Policy
            </Link>
            <Link underline="hover" href="/" size="sm">
              Anti Spam Policy
            </Link>
            <Link underline="hover" href="/" size="sm">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <p className="text-primary font-semibold text-base border-b-1 border-primary">
              Socials
            </p>
            <Link underline="hover" href="/" size="sm">
              Facebook
            </Link>
            <Link underline="hover" href="/" size="sm">
              Instagram
            </Link>
            <Link underline="hover" href="/" size="sm">
              YouTube
            </Link>
          </div>
        </div>
        <p className="text-center text-xs">
          Copyright ©2023 D'LUXE All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
