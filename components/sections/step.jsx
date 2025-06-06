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

export default function Step() {
  const steps = [
    {
      icon: "quiz",
      title: "Tout commence par un QCM rapide",
      content: `<p>
                 Définissez les grandes lignes de votre projet en quelques minutes avec notre QCM rapide et intuitif.
                </p>`,
    },
    {
      icon: "phone_forwarded",
      title: "Contact Direct et Précis",
      content: `<p>
                 Pour l'étape du premier contact téléphonique visant à affiner les détails de la demande.
                </p>`,
    },
    {
      icon: "home_pin",
      title: "Rendez-vous",
      content: `<p>
                Pour la rencontre sur le site du projet afin d'évaluer les besoins spécifiques.
                </p>`,
    },
    {
      icon: "receipt_long",
      title: "Élaboration Du devis",
      content: `<p>
               Pour l'élaboration d'un devis qui répond précisément aux attentes du client.
                </p>`,
    },
    {
      icon: "imagesearch_roller",
      title: "Lancement du Projet",
      content: `<p>
               Pour l'étape de mise en œuvre du projet suite à l'acceptation du devis.
                </p>`,
    },
    {
      icon: "vacuum",
      title: "Finalisation et Nettoyage",
      content: `<p>
                 Pour la conclusion des travaux avec nettoyage et réception du chantier.
                </p>`,
    },
    {
      icon: "call_quality",
      title: "Support Continu",
      content: `<p>
                Pour l'assurance d'une disponibilité constante pour des conseils et un service après-vente.
                </p>`,
    },
    // Vous pouvez ajouter d'autres prestations ici
  ];

  return (
    <section className="w-full mx-auto relative py-12 max-w-screen-2xl">
      <div className="absolute z-0 rotate-[25deg] -bottom-56 -left-96 ">
        <Image
          src="/images/echantion.png"
          alt="Rouleau de peinture"
          width={543}
          height={542.39}
          priority
        />
      </div>
      {/*    <div className="absolute z-0 right-0">
        <Image
          src="/images/1.png"
          alt="Rouleau de peinture"
          width={827.76}
          height={741.07}
          priority
        />
      </div> */}
      <div className="relative z-10 w-full mx-auto">
        <h2 className="text-center text-4xl pb-6 text-primary-200">
          Les étapes de votre projet
        </h2>
        <ContentTextDecor className="max-w-screen-2xl w-4/5 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          pretium ante elit. Quisque feugiat, sem vitae consectetur consectetur,
          augue leo euismod felis, ut ultricies lorem sem vel sem. Aenean
          sagittis ornare erat, ac lacinia dolor cursus non. Suspendisse ante
          sem, molestie dui.{" "}
        </ContentTextDecor>
        {/*    <div className="flex justify-center my-16">
          <Card className="relative max-w-80 p-8 pt-16 h-[300px] flex flex-col border-0">
            <div className="shadow absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-24 h-24 bg-secondary text-center place-content-center">
              <span className="material-symbols-outlined text-secondary-100 text-5xl">
                {steps[0].icon}
              </span>
            </div>
            <CardHeader className="px-0 pt-4">
              <CardTitle className="text-xl">{steps[0].title}</CardTitle>
            </CardHeader>
            <CardContent
              className="px-0 flex-grow"
              dangerouslySetInnerHTML={{ __html: steps[0].content }}
            />
          </Card>
        </div> */}
        <div className="flex overflow-x-auto py-6 h-80 items-center snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6 px-4 md:px-6">
            {steps.map((item, index) => (
              <div key={index} className="snap-center flex-shrink-0 w-80 pt-7">
                <Card className="relative p-3 pt-6 flex flex-col border-0 shadow h-full">
                  <div className="shadow absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-14 h-14 bg-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-gray-100 text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <CardHeader className="px-0 pt-4">
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent
                    className="px-0 text-gray-100 text-lg flex-grow"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
