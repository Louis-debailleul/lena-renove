"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Project from "../project";
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
    <Section className="mx-auto rounded-lg">
      <div className="mx-auto">
        <Carousel onSelect={handleSelect}>
          <div className="sticky lg:relative top-11 lg:top-0 lg:bg-transparent bg-white py-2 lg:py-6 z-50 lg:z-0 flex justify-center gap-4 items-center transition-all duration-200">
            <CarouselPrevious
              className="transform-none w-8 h-8 lg:w-12 lg:h-12 static"
              onClick={() => setCurrentIndex(currentIndex - 1)}
            />
            <h2 className="text-4xl text-primary-200">
              Réalisations {currentIndex + 1}/{totalProjects}
            </h2>
            <CarouselNext
              className="transform-none w-8 h-8 lg:w-12 lg:h-12 static"
              onClick={() => setCurrentIndex(currentIndex + 1)}
            />
          </div>
          <CarouselContent>
            <CarouselItem>
              <Project />
            </CarouselItem>
            <CarouselItem>
              <Project />
            </CarouselItem>
            <CarouselItem>
              <Project />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};

export default Projects;
