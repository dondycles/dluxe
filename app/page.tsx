"use client";
import slide1 from "@/public/slide1.webp";
import slide2 from "@/public/slide2.webp";
import { Button, Divider } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion as m, AnimatePresence } from "framer-motion";
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <main className="min-h-full h-full flex flex-col ">
      <AnimatePresence mode="popLayout">
        <m.div
          initial={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: 20 }}
          key={index}
          className="flex flex-col-reverse lg:flex-row gap-x-4 items-center justify-end w-full h-fit "
        >
          <div className="min-h-[300px] max-h-[500px] h-screen flex-1 w-full relative ">
            <Image
              src={contents[index].img}
              alt=""
              fill
              className="object-contain object-bottom h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-2 max-w-[400px] mt-auto ">
            <p className=" text-3xl sm:text-5xl font-semibold text-primary">
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
      <div className="flex flex-row gap-4 mt-8 w-full  ">
        <div className="flex gap-4 flex-row flex-1 bg-background/50 p-4 rounded-xl shadow-lg">
          <div className="flex-1">
            <p className="font-semibold text-primary text-xl">$7T</p>
            <p>
              Projected global investment in direct digital transformation
              efforts from 2020 to 2023.
            </p>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-primary text-xl">$11T</p>
            <p>
              Projected transaction value of the digital payments market by
              2026.
            </p>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-primary text-xl">$384B</p>
            <p>
              Projected size of the global blockchain technology market by 2028.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
