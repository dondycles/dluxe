// app/providers.tsx
"use client";

import Nav from "@/components/nav";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="max-h-[100dvh] h-screen w-full  text-foreground light text-xs sm:text-sm  flex flex-col relative bg-transparent ">
      <Nav />
      {children}
      <div className="bg-gradient-to-b from-background to-primary/25 bg-background fixed top-0 left-0 bottom-0 right-0 -z-[10]" />
    </NextUIProvider>
  );
}
