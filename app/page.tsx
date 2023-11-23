"use client";
import slide1 from "@/public/slide1.webp";
import slide2 from "@/public/slide2.webp";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="px-4 sm:px-16 md:px-32 w-full  h-full">
      <div className="w-full min-h-full flex flex-col gap-4">
        <AnimatePresence mode="wait">
          <m.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col-reverse lg:flex-row gap-4 justify-center items-center mt-auto mb-0 overflow-hidden"
          >
            <div className="relative ">
              <Image
                src={contents[index].img}
                alt=""
                className=" max-h-[300px] lg:max-h-[500px] w-auto"
              />
            </div>
            <div className="flex flex-col gap-1 max-w-[300px]">
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
            </div>
          </m.div>
        </AnimatePresence>

        <div className="bg-background/60 max-w-[600px] mx-auto mb-auto mt-0 h-fit w-full flex flex-row gap-4 rounded-xl shadow-md p-4">
          {projecteds.map((projected) => {
            return (
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-primary font-semibold text-2xl">
                  {projected.amount}
                </p>
                <p className="">{projected.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => {
            return (
              <div className="rounded-xl bg-background/60 shadow-md p-4 flex gap-4 flex-col">
                <div className="text-xl bg-primary rounded-full p-4 w-fit mx-auto text-white">
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
      </div>
    </main>
  );
}
