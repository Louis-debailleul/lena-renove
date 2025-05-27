import Section from "./section";
import Image from "next/image";

const idees = [
  { label: "SALLE DE BAIN", image: "/images/salleDeBain.png" },
  { label: "MUR", image: "/images/mur.jpg" },
  { label: "PLINTHES", image: "/images/plinthe.jpg" },
  { label: "MEUBLE", image: "/images/meuble.jpg" },
  { label: "PORTE", image: "/images/porte.jpg" },
  { label: "ASCENSEUR", image: "/images/assenceur.jpg" },
];

export default function IdeeUtilisation() {
  return (
    <Section className="bg-secondary">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
          Idées d'utilisation du covering
        </h2>
      </div>

      {/* Grille responsive */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {idees.map((idee, idx) => (
          <div
            key={idx}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={idee.image}
              alt={idee.label}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Overlay avec dégradé */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

            {/* Texte */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg md:text-xl lg:text-2xl font-playfair font-medium text-center px-4 transform transition-transform duration-300 group-hover:scale-105">
                {idee.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Version mobile avec scroll horizontal (fallback) */}
      <div className="lg:hidden mt-8">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {idees.map((idee, idx) => (
            <div
              key={`mobile-${idx}`}
              className="relative min-w-[280px] h-48 flex-shrink-0 snap-center rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={idee.image}
                alt={idee.label}
                fill
                className="object-cover"
                sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-playfair font-medium text-center px-4">
                {idee.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
