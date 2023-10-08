import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Lora, Nunito, Roboto_Condensed } from "next/font/google";

export const fontSerif = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});
export const fontSanSerif = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "WakeTrips | Gerbang Anda menuju Petualangan di Belitung",
  description: "Gerbang Anda menuju Petualangan di Belitung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSerif.variable} ${fontSanSerif.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
