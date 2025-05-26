import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import Image from "next/image";
import { cn } from "../../lib/utils";
import StarIcon from "@mui/icons-material/Star";
import MultiStepForm from "../../components/quiz/multiStepForm";
import Service from "../../components/sections/sections/service";
import Profil from "../../components/sections/sections/profil";
import Projects from "../../components/sections/sections/projects";
import Step from "../../components/sections/sections/step";
import Reviews from "../../components/sections/sections/reviews";
import MainNav from "../../components/mainNav";
import Hero from "../../components/sections/sections/hero";
export default function Particulier() {
  const prestation = [
    {
      img: "/images/enduit.jpeg",
      alt: "enduits fais par Léna Rénove",
      imgWidth: 247,
      imgHeight: 127,
      title: "Enduits",
      content:
        "Réalisation d'enduits de réparations jusqu'aux enduits de finitions",
    },
    {
      img: "/images/peinture.jpeg",
      alt: "peinture fais par Léna Rénove",
      imgWidth: 247,
      imgHeight: 127,
      title: "Peinture",
      content:
        "Mise en oeuvre de peinture manuel ou mécanique. Pour des finitions soignés et des délais obtimisés",
    },
    {
      img: "/images/film.jpeg",
      alt: "Films architectural fais par Léna Rénove",
      imgWidth: 247,
      imgHeight: 127,
      title: "Films architectural",
      content:
        "Rénovation de toutes les surfaces :  Meubles,  PVC,  verre, bois, métal et plâtre ",
      footer: "En savoir plus",
      new: 1,
    },
    {
      img: "/images/revetement.jpeg",
      alt: "Revêtement muraux fais par Léna Rénove",
      imgWidth: 247,
      imgHeight: 127,
      title: "Revêtement muraux",
      content:
        "Pose de voile de rénovation, toile de verre, papier peint et panoramique",
    },
    {
      img: "/images/deco.png",
      alt: "déco fais par Léna Rénove",
      imgWidth: 247,
      imgHeight: 127,
      title: "Côté déco",
      content:
        "Conseil sur l'amménagement et l'agencement des espaces. Sélection des matériaux et des couleurs",
    },
    // Vous pouvez ajouter d'autres prestations ici
  ];
  return (
    <>
      <Hero page="particulier" />
      <Service />
      <Profil />
      <Projects />
      <Step />
      <Reviews />
      <MultiStepForm />
    </>
  );
}
