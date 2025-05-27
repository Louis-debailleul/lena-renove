import Image from "next/image";
import Section from "./section";
import { Separator } from "../../ui/separator";

export default function Profil() {
  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
        {/* Section Image et Stats */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {/* Titre mobile */}
          <h2 className="lg:hidden text-primary  text-4xl font-playfair mb-3 md:mb-4 text-center">
            Présentation
          </h2>

          {/* Image - Optimisée pour mobile */}
          <div className="relative aspect-[3/4] sm:aspect-[4/5] max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/profil.png"
              alt="Léna Rénove - Artisan peintre"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 50vw"
            />
          </div>

          {/* Stats - Version mobile/tablette */}
          <div className="lg:hidden grid grid-cols-2 bg-primary rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto">
            <div className="text-center py-4 md:py-6">
              <div className="text-xl md:text-2xl font-playfair font-medium text-white">
                <span className="font-meddon text-primary-100 text-2xl md:text-3xl">
                  10
                </span>{" "}
                <span className="text-primary-100 text-sm md:text-base">
                  ans
                </span>
              </div>
              <div className="text-white text-xs md:text-sm mt-1">
                D'expérience
              </div>
            </div>

            <div className="text-center py-4 md:py-6 border-l border-white/30">
              <div className="text-xl md:text-2xl font-playfair font-medium text-white">
                <span className="font-meddon text-primary-100 text-2xl md:text-3xl">
                  +200
                </span>
              </div>
              <div className="text-white text-xs md:text-sm mt-1">
                Projets réalisés
              </div>
            </div>
          </div>
        </div>

        {/* Section Contenu */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {/* Titre desktop */}
          <h2 className="hidden lg:block text-primary text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
            Présentation
          </h2>

          {/* Contenu texte */}
          <div className="space-y-3 md:space-y-4 lg:space-y-6 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-gray-700">
            <p>
              Envie de redonner vie à votre intérieur sans tout changer ? Cette
              entreprise vous accompagne dans vos projets de rénovation, avec
              une approche soignée et personnalisée.
            </p>
            <p>
              Spécialisée en peinture, enduits et finitions, elle transforme vos
              espaces avec précision et sens du détail. Pour une rénovation
              encore plus rapide et durable, profitez aussi de la pose de
              vinyles adhésifs architecturaux :
            </p>
            <p>
              une solution innovante pour relooker tous types de surfaces —
              bois, métal, verre, mélaminé, stratifié, aluminium, etc. — sans
              remplacement. Objectif : vous proposer des solutions esthétiques,
              durables et écologiques, adaptées à vos envies et à votre budget.
            </p>
            <p>
              Redonnez du style à vos espaces, simplement et efficacement, avec
              un accompagnement professionnel à chaque étape.
            </p>
          </div>

          {/* Stats - Version desktop */}
          <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 pt-6 md:pt-8">
            <div className="text-center">
              <div className="text-2xl xl:text-3xl font-playfair font-medium text-primary">
                <span className="font-meddon text-3xl xl:text-4xl">10</span>{" "}
                <span>ans</span>
              </div>
              <div className="text-primary text-sm xl:text-base mt-1">
                D'expérience
              </div>
            </div>

            <Separator orientation="vertical" className="h-16 bg-primary" />

            <div className="text-center">
              <div className="text-2xl xl:text-3xl font-playfair font-medium text-primary">
                <span className="font-meddon text-3xl xl:text-4xl">+200</span>
              </div>
              <div className="text-primary text-sm xl:text-base mt-1">
                Projets réalisés
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
