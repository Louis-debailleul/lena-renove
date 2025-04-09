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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export default function MainNav() {
  const [scrollY, setScrollY] = useState(0);

  // Détection simple du scroll pour les changements visuels
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gestionnaire pour naviguer vers les ancres
  const handleMobileMenuChange = (value) => {
    if (value) {
      document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Variable simple qui détermine si on est scrollé ou non
  const isScrolled = scrollY >= 40;

  return (
    // Conteneur principal qui prend toute la largeur et applique sticky
    <div
      className={` mx-auto top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm sticky" : "max-w-screen-lg"
      }`}
    >
      <NavigationMenu
        className={`-mb-10 mt-5 flex w-full max-w-full justify-between bg-primary-100 md:px-6 px-2 mx-auto transition-all duration-300 ${
          isScrolled ? "shadow-none" : "rounded-full shadow-xl"
        }`}
      >
        <Link href="#projects" className="md:hidden">
          <Image
            src="/images/logoSymboleCouleur.png"
            alt="Logo Léna Rénove"
            priority
            width={50}
            height={50}
            decoding="async"
            className="mx-auto xl:m-0 min-w-12"
          />
        </Link>
        <Link href="#projects" className="hidden md:block">
          {/* Affichage conditionnel simplifié des logos */}
          <div className="transition-all duration-300">
            {isScrolled ? (
              <Image
                src="/images/logoPetitCouleur.png"
                alt="Logo Léna Rénove"
                priority
                width={391}
                height={465}
                decoding="async"
                className="mx-auto w-60 xl:m-0 transition-all duration-300"
              />
            ) : (
              <Image
                src="/images/logoMoyenCouleur.png"
                alt="Logo Léna Rénove"
                priority
                width={391}
                height={465}
                decoding="async"
                className="mx-auto w-80 xl:m-0 transition-all duration-300"
              />
            )}
          </div>
        </Link>
        <NavigationMenuList className="flex justify-end space-x-4 text-sm sm:text-base md:text-xl font-bold">
          <NavigationMenuItem>
            <Link href="#informations">Réalisations</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#skills">Professionnel</Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className="bg-gray-200 text-white">
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
