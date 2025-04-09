import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import ContentTextDecor from "../ui/contentTextDecor";
import Section from "./section";
import HighlightString from "../animations/highlightString";
import NewBadge from "../animations/newBadge";

export default function Service() {
  const prestation = [
    {
      img: "/images/enduit.png",
      alt: "enduits fais par Léna Rénove",
      imgWidth: 247,
      imgHeight: 127,
      title: "Enduits",
      content:
        "Réalisation d'enduits de réparations jusqu'aux enduits de finitions",
    },
    {
      img: "/images/peinture.png",
      alt: "peinture fais par Léna Rénove",
      imgWidth: 247,
      imgHeight: 127,
      title: "Peinture",
      content:
        "Mise en oeuvre de peinture manuel ou mécanique. Pour des finitions soignés et des délais obtimisés",
    },
    {
      img: "/images/film.png",
      alt: "Films architectural fais par Léna Rénove",
      imgWidth: 247,
      imgHeight: 127,
      title: "films architectural",
      content:
        "rénovation de toutes les surfaces :  Meubles,  PVC,  verre, bois, métal et plâtre ",
      footer: "En savoir plus",
      new: 1,
    },
    {
      img: "/images/revetement.png",
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
    <Section>
      <h2 className="text-center text-4xl mb-6">PRESTATION</h2>
      <ContentTextDecor className="pb-6">
        Avec plus de dix ans d'expérience, je vous accompagne,{" "}
        <HighlightString>particuliers et professionnels</HighlightString>, dans
        vos projets de rénovation. Que ce soit pour un{" "}
        <HighlightString>petit rafraîchissement</HighlightString> ou{" "}
        <HighlightString>un grand chantier</HighlightString>, je mets mon
        savoir-faire au service de votre image.
      </ContentTextDecor>

      <div className="flex flex-wrap justify-center xl:justify-between gap-4">
        {prestation.map((item, index) => (
          <Card
            key={index}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] xl:w-[calc(20%-1rem)] max-w-72 overflow-hidden"
          >
            <div className="relative w-full h-40">
              {item.new && <NewBadge />}
              <Image
                src={item.img}
                alt={item.alt}
                priority
                fill
                className="object-cover object-center rounded-t-lg"
                decoding="async"
              />
            </div>
            <CardHeader>
              <CardTitle className="uppercase text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
            </CardContent>

            {item.footer && (
              <CardFooter>
                <Link className="text-right w-full" href="#informations">
                  {item.footer}
                </Link>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
