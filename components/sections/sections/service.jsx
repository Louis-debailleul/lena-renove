import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import Image from "next/image";
import Section from "./section";

export default function Service() {
  const prestation = [
    {
      img: "/images/enduit.jpeg",
      alt: "enduits fais par Léna Rénove",
      imgWidth: 128,
      imgHeight: 208,
      title: "Enduits",
      content:
        "Réalisation d'enduits de réparations jusqu'aux enduits de finitions",
    },
    {
      img: "/images/peinture.jpeg",
      alt: "peinture fais par Léna Rénove",
      imgWidth: 128,
      imgHeight: 208,
      title: "Peinture",
      content:
        "Mise en oeuvre de peinture manuel ou mécanique. Pour des finitions soignés et des délais obtimisés",
    },
    {
      img: "/images/film.jpeg",
      alt: "Films architectural fais par Léna Rénove",
      imgWidth: 128,
      imgHeight: 208,
      title: "Films architectural",
      content:
        "Rénovation de toutes les surfaces :  Meubles,  PVC,  verre, bois, métal et plâtre ",
      footer: "En savoir plus",
      new: 1,
    },
    {
      img: "/images/revetement.jpeg",
      alt: "Revêtement muraux fais par Léna Rénove",
      imgWidth: 128,
      imgHeight: 208,
      title: "Revêtement muraux",
      content:
        "Pose de voile de rénovation, toile de verre, papier peint et panoramique",
    },
    {
      img: "/images/deco.png",
      alt: "déco fais par Léna Rénove",
      imgWidth: 128,
      imgHeight: 208,
      title: "Côté déco",
      content:
        "Conseil sur l'amménagement et l'agencement des espaces. Sélection des matériaux et des couleurs",
    },
    // Vous pouvez ajouter d'autres prestations ici
  ];

  return (
    <Section className="pl-6 pr-0 md:pr-0 lg:px-6">
      <div className="lg:hidden pr-6 md:pr-6 xl:pr-0 mb-8">
        <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
          Préstations
        </h2>
        <p className="text-lg">
          Des intérieurs qui vous mettent en valeur, grâce à un travail durable
          et soigné. Peinture, enduits, papier peint ou pose de films adhésifs
          sur tous supports : en neuf comme en rénovation, Léna transforme vos
          espaces selon vos besoins !
        </p>
      </div>
      <div className="flex flex-row overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible gap-4 pb-6">
        <div className="hidden lg:block pr-0 md:pr-0 mb-4">
          <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
            Préstations
          </h2>
          <p className="text-lg pr-4">
            Des intérieurs qui vous mettent en valeur, grâce à un travail
            durable et soigné. Peinture, enduits, papier peint ou pose de films
            adhésifs sur tous supports : en neuf comme en rénovation, Léna
            transforme vos espaces selon vos besoins !
          </p>
        </div>
        {prestation.map((item, index) => (
          <Card
            key={index}
            className="flex bg-primary-100 w-full flex-row min-w-80  h-auto snap-center shadow-sm rounded-sm"
          >
            <div className="w-1/3">
              <Image
                src={item.img}
                alt={item.alt}
                width={item.imgWidth}
                height={item.imgHeight}
                className="w-full h-full object-cover object-center"
                priority
                decoding="async"
              />
            </div>
            <div className="w-2/3 flex flex-col p-6">
              <CardHeader className="">
                <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-100 text-base lg:text-lg">
                  {item.content}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
