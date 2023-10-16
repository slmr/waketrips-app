"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { Separator } from "../ui/separator";
import SheetMenu from "./sheet-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block relative select-none space-y-3 rounded-md leading-none outline-none transition-colors",
            className
          )}
          {...props}
        >
          {children}
          <div className="text-sm text-center font-mono leading-none uppercase">
            {title}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const LeftMenu = () => {
  const items = [
    {
      title: "Hemat",
      href: "/tour-packages/hemat",
      image: "/assets/images/paket/bg-paket-1.jpg",
    },
    {
      title: "Regular",
      href: "/tour-packages/regular",
      image: "/assets/images/paket/bg-paket-2.jpg",
    },
    {
      title: "Keluarga",
      href: "/tour-packages/keluarga",
      image: "/assets/images/paket/bg-paket-3.jpg",
    },
    {
      title: "Honeymoon",
      href: "/tour-packages/honeymoon",
      image: "/assets/images/paket/bg-paket-3.jpg",
    },
    {
      title: "One Day Trip",
      href: "/tour-packages/one-day-trip",
      image: "/assets/images/paket/bg-paket-3.jpg",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase text-xs font-mono">
            Paket Wisata
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid place-items-center mt-3">
              <span className="uppercase font-mono">Pilihan Paket</span>
            </div>
            <Separator className="mt-3" />
            <ul className="container max-w-4xl grid gap-4 p-5 lg:grid-cols-4 w-full">
              {items.map((item) => (
                <ListItem key={item.title} href={item.href} title={item.title}>
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="transition ease-in-out duration-700 hover:scale-105"
                    />
                  </div>
                </ListItem>
              ))}
            </ul>
            <div className="grid place-items-center p-3 border">
              <Link href="/paket" className="uppercase text-sm font-mono">
                View All
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase text-xs font-mono">
            Destinasi
          </NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="uppercase text-xs font-mono">
            Sewa
          </NavigationMenuTrigger>
          <NavigationMenuContent></NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
const RightMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="uppercase text-xs font-mono">
          <Link href="/gallery" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Galeri
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="uppercase text-xs font-mono">
          <Link href="/reservation" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Reservasi
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="uppercase text-xs font-mono">
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Tentang
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
const Header = () => {
  return (
    <header
      className={`fixed flex items-center justify-between py-2 px-4 border-b border-gray-200 bg-white z-50 w-full h-[3.75rem]`}
    >
      <SheetMenu />
      <div className="hidden lg:flex justify-center ">
        <LeftMenu />
      </div>
      <Link
        href="/"
        className="flex  flex-shrink-0 items-cente justify-center gap-2 hover:text-foreground"
      >
        <h1 className="font-serif text-4xl">Waketrips</h1>
      </Link>
      <div className="hidden lg:flex justify-center">
        <RightMenu />
      </div>
      <Button
        variant="outline"
        className="rounded-full border-2 lg:border border-dashed lg:border-solid border-gray-600 h-10 w-10 lg:h-auto lg:w-auto p-0 lg:pl-4 lg:pr-1 lg:py-1"
        asChild
      >
        <Link href="/contact-us">
          <span className="hidden lg:inline-block uppercase font-mono text-xs mr-2">
            Enquire
          </span>
          <div className="lg:border-2 lg:border-dashed lg:rounded-full lg:border-gray-600 lg:p-2">
            <Mail className="h-4 w-4" strokeWidth={1} />
          </div>
        </Link>
      </Button>
    </header>
  );
};

export default Header;
