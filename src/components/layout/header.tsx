"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SheetMenu from "./sheet-menu";
import useScrollDirection from "@/hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();
  return (
    <nav
      className={`flex items-center justify-between py-2 px-4 border-b border-gray-200 sticky bg-white z-50 w-full h-[4.2rem] ${
        scrollDirection === "down" ? "-top-52" : "top-0"
      } transition-all duration-500`}
    >
      <SheetMenu />
      <Link
        href="/"
        className="absolute top-0 sm:top-[4px] left-1/2 -translate-x-1/2"
      >
        <Image src="/logo.svg" alt="WakeTrips" width={110} height={110} />
      </Link>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-dashed border-gray-600 border-2"
      >
        <Mail size={20} strokeWidth={1} />
      </Button>
    </nav>
  );
};

export default Header;
