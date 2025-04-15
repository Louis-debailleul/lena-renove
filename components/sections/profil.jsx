import Image from "next/image";
import { Separator } from "../ui/separator";
import Section from "./section";
export default function Profil() {
  const profil = {
    img: "/images/profil.png",
    alt: "enduits fais par Léna Rénove",
    imgWidth: 426,
    imgHeight: 430,
    title: "Derrière le pinceau, une passionnée au service de vos projets !",
    content: `<p class="pt-3"> Je suis peintre en bâtiment et fondatrice de mon entreprise.
Passionnée par la rénovation, l'architecture  et le travail bien fait ! Je réalise tous types de travaux de peinture, d'enduits et de finitions.</p>

  <p class="pt-3"> Je me suis spécialisée dans la pose de vinyles adhésifs architecturaux. Cette solution innovante permet de rénover de nombreux supports — bois, métal, verre, mélaminé, stratifié, aluminium, etc. — sans avoir à les remplacer.</p>

  <p class="pt-3">Mon objectif ? Offrir à mes clients des solutions esthétiques, durables et écologiques pour rénover plutôt que jeter.</p>

  <p class="pt-3">Ensemble, redonnons du style à vos espaces !</p>

  `,
    footer: "En savoir plus",
    insta: "link",
  };
  return (
    <Section>
      {/* Version mobile-first avec image portrait */}
      <div className="absolute z-0 bottom-[-275px] right-[-159px]">
        <Image
          src="/images/métre.png"
          alt="Rouleau de peinture"
          width={543}
          height={542.39}
          priority
        />
      </div>
      <div className="flex flex-col relative lg:max-w-screen-lg mx-auto">
        {/* Image portrait - optimisée pour différentes tailles d'écran */}

        <div className="sm:flex sm:flex-row-reverse lg:items-start">
          <div className="mb-6 sm:w-2/4 lg:w-3/5">
            <h2 className="text-4xl sm:text-5xl font-semibold pl-3 lg:text-3xl text-primary-200">
              {profil.title}
            </h2>
            <div
              className="hidden lg:block text-lg w-full h-auto px-2 lg:text-base"
              dangerouslySetInnerHTML={{ __html: profil.content }}
            ></div>
          </div>
          <div className="relative z-0 w-full sm:w-2/4 lg:w-2/5 h-[331px] lg:h-[390px]  mx-auto  max-w-sm">
            <Image
              src="/images/photoLena.png"
              alt="enduits fais par Léna Rénove"
              className="rounded-lg sm:rounded-tl-[50px] object-cover object-top w-full h-full"
              priority
              layout="fill"
              decoding="async"
            />
          </div>
        </div>

        <div className="relative shadow w-z-10 flex w-4/5 mx-auto sm:ml-[20%] -mt-10 p-3 lg:p-6 text-center text-lg lg:text-xl bg-primary sm:rounded-br-[50px] items-center justify-evenly">
          <span className="font-bold">
            <span className="text-primary-200">10 ans</span> <br /> d'expérience
          </span>
          <Separator orientation="vertical" className="h-10 bg-gray-200" />
          <span className="font-bold">
            <span className="text-primary-200">+ 200</span> <br /> projets
            réalisés
          </span>
        </div>

        {/* Contenu - adapté pour compléter l'image portrait */}
        <div className="flex flex-col lg:hidden sm:w-4/5 sm:ml-[20%] p-3">
          <div
            className="text-lg w-full h-auto"
            dangerouslySetInnerHTML={{ __html: profil.content }}
          ></div>
        </div>
      </div>
    </Section>
  );
}
