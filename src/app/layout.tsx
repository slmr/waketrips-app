import Header from "@/components/layout/header";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const GTPressura = localFont({
  src: [
    {
      path: "./assets/fonts/GT-Pressura-Light.woff2",
      weight: "300",
    },
  ],
  variable: "--font-gt-pressura",
});
const GTPressuraMono = localFont({
  src: [
    {
      path: "./assets/fonts/GT-Pressura-Mono-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-gt-pressura-mono",
});
const GTSectra = localFont({
  src: [
    {
      path: "./assets/fonts/GT-Sectra-Fine-Book.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gt-sectra",
});

import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

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
      className={`${GTPressura.variable} ${GTPressuraMono.variable} ${GTSectra.variable}`}
    >
      <body>
        <Header />
        <main className="pt-[3.75rem]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
