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
          <div className="sticky lg:relative top-0 bg-white py-4 z-50 lg:z-0 flex justify-center gap-4 items-center transition-all duration-200">
            <CarouselPrevious className="transform-none w-12 h-12 static" />
            <p className="text-3xl">
              Réalisations {currentIndex + 1}/{totalProjects}
            </p>
            <CarouselNext className="transform-none w-12 h-12 static" />
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
