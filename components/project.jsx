"use client";
import AfterBefore from "./afterBefore";
import Image from "next/image";
import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu";
import { motion } from "framer-motion";

const Project = () => {
  const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollY;
  };

  return (
    <div className="mx-auto shadow rounded-lg bg-primary p-3 sm:p-4 lg:p-6 w-full lg:w-10/12">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="rounded-lg flex justify-center lg:ml-[-100px] overflow-hidden">
          <AfterBefore
            afterImage="/images/project/p1.png"
            beforeImage="/images/project/p2.png"
            className="w-full shadow"
          />
        </div>

        <div className="flex flex-col justify-center p-3 lg:p-6">
          <h2 className="text-2xl font-bold mb-3 order-1">
            Projet de chambre et salle de bain
          </h2>
          <p className="text-gray-500 mb-3 order-3 lg:order-2 lg:mb-6">
            Mon client a fait "Wahou" lorsqu'il est rentré et c'est exactement
            l'effet que je recherche en fin de chantier ! Techniquement, ce
            chantier était assez compliqué car les murs étaient tout sauf saint.
            Cependant j'ai accomplis ma mission ! Et toi tu en penses quoi ? :)
          </p>

          <div className="flex gap-4 overflow-auto order-2 lg:order-3 pb-3">
            <Image
              src="/images/project/p2.png"
              width={190}
              height={90}
              alt="project"
              className="rounded-lg"
            />
            <Image
              src="/images/project/p3.png"
              width={190}
              height={80}
              alt="project"
              className="rounded-lg"
            />
            <Image
              src="/images/project/p4.png"
              width={190}
              height={80}
              alt="project"
              className="rounded-lg"
            />
            <Image
              src="/images/project/p5.png"
              width={190}
              height={80}
              alt="project"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
