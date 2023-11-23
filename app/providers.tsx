// app/providers.tsx
"use client";

import Nav from "@/components/nav";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="max-h-[100dvh] h-screen w-full  text-foreground light text-xs sm:text-sm bg-gradient-to-b from-background to-primary/25 bg-background">
      <Nav />
      {children}
    </NextUIProvider>
  );
}
