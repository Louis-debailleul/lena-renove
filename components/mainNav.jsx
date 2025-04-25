"use client";
import { useState, useEffect } from "react";
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scrollY >= 40;

  return (
    <div
      className={`mx-auto top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm sticky" : "md:max-w-screen-xl md:px-12"
      }`}
    >
      <NavigationMenu
        className={`md:-mb-10 py-2 md:mt-5 max-w-screen-xl flex w-full justify-between bg-primary mx-auto transition-all duration-300 ${
          isScrolled
            ? "shadow-none px-4 lg:px-6 xl:px-0"
            : "md:rounded-full md:shadow px-4"
        }`}
      >
        <Link href="#projects" className="sm:block hidden h-16">
          <Image
            src="/images/logoMoyenCouleur.png"
            alt="Logo Léna Rénove"
            priority
            width={391}
            height={465}
            decoding="async"
            className={`mx-auto xl:m-0 transition-all duration-300 w-full h-full object-contain hover:scale-105`}
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
            className={`transition-all duration-300 w-full h-full object-contain hover:scale-110`}
            quality={85}
          />
        </Link>
        <NavigationMenuList className="flex justify-end space-x-4 text-sm sm:text-base md:text-xl font-bold">
          <NavigationMenuItem>
            <Link href="#projects">Réalisations</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#skills">Professionnel</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="bg-secondary rounded-full">
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
