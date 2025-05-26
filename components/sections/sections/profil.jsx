import Image from "next/image";
import Section from "./section";
import { Separator } from "../../ui/separator";

export default function Profil() {
  return (
    <Section className="bg-white md:px-0 md:py-0 py-12">
      <div className="md:flex w-full">
        <h2 className="md:hidden text-primary text-4xl mb-4">PRESENTATION</h2>

        <div className="sm:flex md:flex-col md:w-1/2">
          <div className="sm:w-1/2 md:w-full">
            <Image
              src="/images/profil.png"
              alt="Léna Rénove"
              width={386}
              height={486}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="h-auto md:h-full sm:w-1/2 md:w-full  flex sm:flex-col  justify-evenly text-center bg-primary lg:hidden text-xl sm:text-2xl font-playfair font-medium">
            <div className="py-4">
              <span>
                <span className="font-meddon text-primary-100">10</span>{" "}
                <span className="text-primary-100">ans</span>
                <br /> D&apos;experience
              </span>
            </div>

            <div className="py-4">
              <span>
                <span className="font-meddon text-primary-100">+200</span>{" "}
                <br /> Projet realisé
              </span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 lg:w-2/3 flex flex-col gap-4 lg:pt-4 mt-4 xl:my-4  md:mx-4  xl:justify-evenly">
          <h2 className="hidden md:block text-primary text-4xl xl:text-6xl lg:mx-6 ">
            PRESENTATION
          </h2>
          <div className="flex flex-col gap-4 md:mt-0 text-lg  xl:text-xl max-w-prose lg:mx-6">
            <p>
              Envie de redonner vie à votre intérieur sans tout changer ? Cette
              entreprise vous accompagne dans vos projets de rénovation, avec
              une approche soignée et personnalisée. une approche soignée et
              personnalisée.
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
              durables et écologiques, adaptées à vos envies et à votre budget
            </p>
            <p>
              Redonnez du style à vos espaces, simplement et efficacement, avec
              un accompagnement professionnel à chaque étape.
            </p>
          </div>
          <div className="text-3xl font-playfair font-medium w-full justify-evenly items-center text-center bg-primary hidden xl:flex xl:bg-transparent">
            <div>
              <p className="text-3xl py-6">
                <span className="font-meddon text-primary">10</span>{" "}
                <span className="text-primary">ans</span> <br />{" "}
                D&apos;experience
              </p>
            </div>
            <Separator
              orientation="vertical"
              className="h-full w-[1px] bg-primary "
            />
            <div>
              <p className="text-3xl py-6">
                <span className="font-meddon text-primary">+200</span> <br />{" "}
                Projet realisé
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-3xl font-playfair font-medium lg:flex w-full justify-evenly items-center text-center bg-primary hidden xl:hidden">
        <div>
          <p className="text-3xl py-6">
            <span>10 ANS</span> <br /> D&apos;experience
          </p>
        </div>
        <hr />
        <div>
          <p className="text-3xl py-6">
            <span>+200</span> <br /> Projet realisé
          </p>
        </div>
      </div>
    </Section>
  );
}
