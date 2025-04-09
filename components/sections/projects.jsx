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
/* watchFocus */
const Projects = () => {
  const data = [{ titre: "Projet 1", images: ["p3.png", "p4.png", "p5.png"] }];

  return (
    <Section className="my-20 py-20 mx-auto rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-10">Projets réalisés</h2>

      <div className="container mx-auto">
        <Carousel>
          {/* Navigation avec position sticky native */}
          <div
            className="sticky top-0 bg-white py-4 z-50 flex justify-center gap-4 items-center transition-all duration-200"
            style={{
              // limite la position sticky à la section parente
              position: "sticky",
              // le top-0 est dans la classe Tailwind ci-dessus
            }}
          >
            <CarouselPrevious className="transform-none w-12 h-12 static" />
            <p className="text-gray-500 text-3xl"> realisation 1/3</p>
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
          <div className="hidden lg:flex justify-center gap-4 items-center mt-4">
            <CarouselPrevious className="transform-none w-12 h-12" />
            <p className="text-gray-500 text-3xl"> realisation 1/3</p>
            <CarouselNext className="transform-none w-12 h-12" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
};

export default Projects;
