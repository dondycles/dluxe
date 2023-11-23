"use client";
import slide1 from "@/public/slide1.webp";
import slide2 from "@/public/slide2.webp";
import { Button } from "@nextui-org/react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="w-full h-full overflow-x-hidden overflow-y-auto pt-32 px-4 sm:px-16 lg:px-32">
      <div className="relative">
        <AnimatePresence>
          <m.div
            initial={{ opacity: 0, translateX: 20 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 20 }}
            key={index}
            className="flex-1 shrink-0 flex flex-wrap gap-4  items-end justify-center absolute top-0 left-0 w-full "
          >
            <Image
              className="max-w-[400px] w-full h-auto "
              src={contents[index].img}
              alt="Slide2"
            />
            <div className="flex flex-col gap-2 max-w-[400px]">
              <p className="text-4xl font-semibold text-primary">
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
      </div>
    </main>
  );
}
