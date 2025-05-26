import CheckIcon from "@mui/icons-material/Check";
import Section from "./section";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";

const points = [
  {
    text: (
      <>
        <span className="font-semibold text-white">
          Jusqu’à 70 % d’économies
        </span>{" "}
        vs. rénovation classique
      </>
    ),
  },
  {
    text: (
      <>
        <span className="font-bold text-white">installation rapide</span>, sans
        poussière ni interruption d’activité
      </>
    ),
  },
  {
    text: (
      <>
        Plus de <span className="font-bold text-white">500 textures</span>{" "}
        (bois, marbre, métal, textile…)
      </>
    ),
  },
];

const points2 = [
  {
    text: (
      <>
        <span className="font-semibold text-white">Haute durabilité</span> vs.
        (garantie jusqu’à 10 ans)
      </>
    ),
  },
  {
    text: (
      <>
        <span className="font-bold text-white">Démarche écoresponsable </span>,
        (zéro démolition, zéro gaspillage)
      </>
    ),
  },
  {
    text: (
      <>
        <span className="font-bold text-white">Résistance</span>, au UV, au
        chaud et a l'humidité
      </>
    ),
  },
];

export default function DoubleChecklist() {
  return (
    <Section className="bg-primary" childClassName="md:pt-16">
      <div className="flex flex-col md:flex-row justify-around px-0 md:px-0 ">
        <div className="">
          <ul className="mb-0 list-none mx-4">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex text-white flex-nowrap text-lg md:text-xl xl:text-xl mb-4"
              >
                <CheckIcon />
                <div className="ml-2">{point.text}</div>
              </li>
            ))}
          </ul>
        </div>
        <Separator orientation="vertical" className="h-auto hidden md:block" />
        <div className="">
          <ul className="mb-0 list-none mx-4">
            {points2.map((point, idx) => (
              <li
                key={idx}
                className="flex text-white flex-nowrap text-lg md:text-xl xl:text-xl mb-4"
              >
                <CheckIcon />
                <div className="ml-2">{point.text}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        size="lg"
        variant="secondary"
        className="text-center mx-auto block text-xl mt-4 md:mt-16"
      >
        Me contacter
      </Button>
    </Section>
  );
}
