"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import Section from "./section";
import { useState, useEffect } from "react";
import Image from "next/image";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState();

  // Données des projets simplifiées
  const projects = [
    {
      id: 1,
      title: "Rénovation Appartement Moderne",
      description:
        "Transformation complète d'un appartement avec peinture moderne et enduits décoratifs.",
      image: "/images/peinture.jpeg",
    },
    {
      id: 2,
      title: "Revêtement Mural Hôtel",
      description:
        "Installation de revêtements muraux haut de gamme dans un établissement hôtelier.",
      image: "/images/revetement.jpeg",
    },
    {
      id: 3,
      title: "Covering Architectural",
      description:
        "Application de films architecturaux pour moderniser des surfaces sans travaux lourds.",
      image: "/images/film.jpeg",
    },
    {
      id: 4,
      title: "Rénovation Bureau",
      description:
        "Réaménagement complet d'espaces de bureaux avec solutions modernes.",
      image: "/images/peinture.jpeg",
    },
    {
      id: 5,
      title: "Décoration Intérieure",
      description:
        "Conseil en décoration et mise en œuvre pour un intérieur harmonieux.",
      image: "/images/deco.png",
    },
  ];

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => api.off("select", handleSelect);
  }, [api]);

  return (
    <Section
      id="realisations"
      className="relative py-12 md:py-16 lg:py-20 bg-secondary"
      childClassName="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* En-tête de section */}
      <div className="mb-12 md:mb-16 text-center">
        <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
          Mes réalisations
        </h2>
        <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto">
          Découvrez quelques-uns de mes projets récents.
        </p>
      </div>

      {/* Carousel principal */}
      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                  {/* Image du projet */}
                  <div className="relative h-64 md:h-80 lg:h-96">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Contenu de la carte */}
                  <div className="p-6">
                    <h3 className="text-primary text-xl font-playfair font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation du carousel */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <CarouselPrevious className="relative transform-none w-10 h-10 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary" />

            <span className="text-white text-sm">
              {currentIndex + 1} / {projects.length}
            </span>

            <CarouselNext className="relative transform-none w-10 h-10 bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
};

export default Projects;
