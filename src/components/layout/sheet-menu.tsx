import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion, useCycle } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuItem = ({
  children,
  href = "/",
  i,
}: {
  i: number;
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <motion.li
      key="1"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.15 * i, duration: 0.6, ease: "easeIn" }}
      className="mb-3"
    >
      <Link
        href={href}
        className={`text-2xl text-gray-600 hover:text-yellow-500 transition`}
      >
        {children}
      </Link>
    </motion.li>
  );
};
const MenuItemBottom = ({
  children,
  href = "/",
  i,
}: {
  i: number;
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <motion.li
      key="1"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.15 * i, duration: 0.6, ease: "easeIn" }}
      className="mb-2"
    >
      <Link
        href={href}
        className={`text-lg font-thin text-gray-700 hover:text-yellow-500 transition`}
      >
        {children}
      </Link>
    </motion.li>
  );
};
export const Navigation = () => {
  return (
    <ul className="px-6">
      <MenuItem i={1}>Beranda</MenuItem>
      <MenuItem i={2}>Paket Wisata</MenuItem>
      <MenuItem i={3}>Promo</MenuItem>
      <MenuItem i={4}>Destinasi</MenuItem>
      <MenuItem i={5}>Reservasi</MenuItem>
    </ul>
  );
};
export const NavigationBottom = () => {
  return (
    <ul className="px-6">
      <MenuItemBottom i={1}>Kenapa Pilih Kami</MenuItemBottom>
      <MenuItemBottom i={2}>Tentang</MenuItemBottom>
      <MenuItemBottom i={3}>Keberlanjutan</MenuItemBottom>
      <MenuItemBottom i={6}>Kontak</MenuItemBottom>
    </ul>
  );
};
const SheetMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <Sheet open={isOpen}>
      <SheetTrigger asChild>
        <Button
          onClick={() => toggleOpen()}
          variant="outline"
          size="icon"
          className="rounded-full border-dashed border-gray-600 border-2"
        >
          <Menu size={20} strokeWidth={1} />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-full">
        <div className="h-full relative">
          <motion.div
            animate={{ height: "100%" }}
            initial={{ height: "0%" }}
            exit={{ height: "0%" }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              ease: "linear",
              stiffness: 100,
            }}
            className="absolute top-0 left-0 bottom-0 w-[1px] bg-gray-300"
          />
          <motion.div
            animate={{ height: "100%" }}
            initial={{ height: "0%" }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              ease: "linear",
              stiffness: 100,
            }}
            className="absolute top-0 right-0 bottom-0 w-[1px] bg-gray-300"
          />
          <div className="relative">
            <motion.div
              className="flex justify-between items-center py-16 px-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeIn" }}
            >
              <SheetTitle
                className={`flex justify-between items-center text-3xl`}
              >
                <Image
                  src="/logo.svg"
                  alt="WakeTrips"
                  width={150}
                  height={60}
                />
              </SheetTitle>
              <SheetClose asChild onClick={() => toggleOpen()}>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-dashed border-gray-600 border-2"
                >
                  <X size={20} strokeWidth={1} />
                  <span className="sr-only">Close</span>
                </Button>
              </SheetClose>
            </motion.div>
            <motion.div
              animate={{ width: "100%" }}
              initial={{ width: "0%" }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: "linear",
                origin: 1,
              }}
              className="absolute bottom-0 h-[1px] right-0 bg-gray-300"
            />
          </div>
          <nav className="relative py-6">
            <div
              className={`px-6 mb-2 tracking-wider font-thin text-xs uppercase text-stone-400`}
            >
              Discover
            </div>
            <Navigation />
            <motion.div
              animate={{ width: "100%" }}
              initial={{ width: "0%" }}
              exit={{ width: "0%" }}
              transition={{ delay: 0.6, duration: 0.6, ease: "linear" }}
              className="absolute bottom-0 h-[1px] bg-gray-300"
            />
          </nav>

          <motion.nav
            className="relative py-6"
            initial={"closed"}
            animate={isOpen ? "open" : "closed"}
          >
            <div
              className={`px-6 mb-2 tracking-wider font-thin text-xs uppercase text-stone-400 `}
            >
              Pelajari
            </div>
            <NavigationBottom />
          </motion.nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
