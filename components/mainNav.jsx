"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function MainNav() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className={`mx-auto z-50 w-full bg-primary-100`}>
      <NavigationMenu
        className={`flex w-full justify-between mx-auto max-w-[100%] px-4 md:px-6`}
      >
        <Link href="#projects" className="sm:block hidden h-16">
          <Image
            src="/images/logoMoyenCouleur.png"
            alt="Logo Léna Rénove"
            priority
            width={391}
            height={465}
            decoding="async"
            className={`mx-auto xl:m-0  w-full h-full object-contain hover:scale-105`}
            quality={90}
          />
        </Link>
        <Link href="#projects" className="block sm:hidden h-12">
          <Image
            src="/images/logoSymboleCouleur.png"
            alt="Logo Léna Rénove"
            priority
            width={50}
            height={50}
            decoding="async"
            className={` w-full h-full object-contain hover:scale-110`}
            quality={85}
          />
        </Link>
        <NavigationMenuList className="flex justify-end space-x-4 text-sm sm:text-base md:text-xl">
          <NavigationMenuItem>
            <Link href="#projects">Réalisations</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {pathname === "/professionnel" ? (
              <Link href="/particulier">Particulier</Link>
            ) : (
              <Link href="/professionnel">Professionnel</Link>
            )}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="">
              <Link
                href="#contact"
                className="NavigationMenuLink text-sm md:text-xl flex items-center gap-2"
              >
                <span className="hidden md:block">Me contacter</span>
                <span className="material-symbols-outlined">mail</span>
              </Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
