"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Section from "./section";
import { useState } from "react";
import Image from "next/image";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [{ titre: "Projet 1", images: ["p3.png", "p4.png", "p5.png"] }];
  const totalProjects = 3; // Nombre total de projets

  const handleSelect = (api) => {
    setCurrentIndex(api.selectedScrollSnap());
  };

  return (
    <Section className="bg-secondary px-6">
      <h2 className="text-primary-100 text-4xl mb-4">MES REALISATIONS</h2>
      <Carousel>
        <CarouselContent className="mx-auto">
          <CarouselItem className="pr-4 mb-8 pl-0 flex flex-col items-center sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <Image
              src={"/images/peinture.jpeg"}
              alt={"peinture fais par Léna Rénove"}
              width={320}
              height={180}
              className="w-full object-cover object-center h-[500px]"
              priority
              decoding="async"
            />
            <p className="text-md ml-2 mt-4">un petit projet de peintureun</p>
          </CarouselItem>
          <CarouselItem className="pr-4 pl-0  flex flex-col items-center sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <Image
              src={"/images/revetement.jpeg"}
              alt={"peinture fais par Léna Rénove"}
              width={320}
              height={180}
              className="w-full object-cover object-center h-[500px]"
              priority
              decoding="async"
            />
            <p className="text-md ml-2 mt-4">un petit projet de peinture</p>
          </CarouselItem>
          <CarouselItem className="pr-4 pl-0  flex flex-col items-center sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <Image
              src={"/images/film.jpeg"}
              alt={"peinture fais par Léna Rénove"}
              width={320}
              height={180}
              className="w-full object-cover object-center h-[500px]"
              priority
              decoding="async"
            />
            <p className="text-md ml-2 mt-4">
              un petit projet de peintureun petit projet de peintureun petit
            </p>
          </CarouselItem>
          <CarouselItem className="pr-4 pl-0  flex flex-col items-center sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <Image
              src={"/images/peinture.jpeg"}
              alt={"peinture fais par Léna Rénove"}
              width={320}
              height={180}
              className="w-full object-cover object-center h-[500px]"
              priority
              decoding="async"
            />
            <p className="text-md ml-2 mt-4">
              un petit projet de peintureun petit projet de peintureun petit
            </p>
          </CarouselItem>
          <CarouselItem className="pr-4 pl-0  flex flex-col items-center sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <Image
              src={"/images/peinture.jpeg"}
              alt={"peinture fais par Léna Rénove"}
              width={320}
              height={180}
              className="w-full object-cover object-center h-[500px]"
              priority
              decoding="async"
            />
            <p className="text-md ml-2 mt-4">
              un petit projet de peintureun petit projet de peintureun petit
              projet de peintureun petit projet de peintureun petit projet de
              peinture
            </p>
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center items-center gap-4">
          <CarouselPrevious className="transform-none w-8 h-8 lg:w-12 lg:h-12 static" />
          <p className="text-lg">1/3</p>
          <CarouselNext className="transform-none w-8 h-8 lg:w-12 lg:h-12 static" />
        </div>
      </Carousel>
    </Section>
  );
};

export default Projects;
