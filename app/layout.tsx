import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});
export const metadata: Metadata = {
  title: "D'luxe | Ultimate Profit",
  description: "D'luxe | Ultimate Profit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
