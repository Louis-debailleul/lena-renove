import Section from "./section";
import { Separator } from "../../ui/separator";
export default function EtudesCoverstyle() {
  return (
    <Section className="bg-white">
      <h2 className="text-primary text-4xl mb-12">
        DES ETUDES REALISE PAR COVERSTYLE
      </h2>
      <div className="flex flex-col md:flex-row  justify-around">
        {/* Colonne Hôtels */}
        <div className=" md:w-1/2 ">
          <h3 className="font-semibold text-primary text-xl md:text-2xl  mb-4">
            POUR LES HOTELS
          </h3>
          <ul className="list-none space-y-4 lg:space-y-6 text-lg md:text-xl xl:text-xl mb-12 md:ms-0 ms-2">
            <li className="">
              <span className="font-bold">84% Des utilisateurs </span>{" "}
              considèrent les avis des clients aussi importants que ceux de leur
              proches.
            </li>
            <li className="">
              <span className="font-bold">90% Des voyageurs </span> sont
              influencés par les notes des hotels sur internet avant de
              réserver.
            </li>
            <li className="">
              <span className="font-bold">94% </span> De clients potentiels
              perdus suite à un avis négatif.
            </li>
            <li className="">
              <span className="font-bold">11%</span> Est l’augmentation de votre
              chiffre d’affaire par points gagnés sur TripAdvisor.
            </li>
          </ul>
        </div>
        <Separator
          orientation="vertical"
          className="h-auto hidden md:block bg-primary mx-4 lg:mx-6"
        />

        <div className="md:w-1/2 ">
          <h3 className="font-semibold text-primary  text-xl md:text-2xl mb-4">
            POUR LES MAGASINS
          </h3>
          <ul className="list-none space-y-4 lg:space-y-6 text-lg md:text-xl xl:text-xl mb-8 md:ms-0 ms-2">
            <li className="">
              <span className="font-bold">6 ans</span> le délai moyen entre deux
              rénovations des magasins.
            </li>
            <li className="">
              <span className="font-bold">12 semaines</span> la durée moyenne
              pour remodelage “classique” d’un magasin.
            </li>
            <li className="">
              <span className="font-bold">70%</span> Les premières ventes sont
              basées sur l’attrait de la façade.
            </li>
            <li className="">
              <span className="font-bold">40%</span> Augmentation moyenne des
              ventes après la rénovation d’un magasin.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
