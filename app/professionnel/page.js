import MultiStepForm from "../../components/quiz/multiStepForm";
import Service from "../../components/sections/sections/service";
import Step from "../../components/sections/sections/step";
import Reviews from "../../components/sections/sections/reviews";
import SectionImageText from "../../components/sections/sections/sectionImageText";
import DoubleChecklist from "../../components/sections/sections/doubleChecklist";
import IdeeUtilisation from "../../components/sections/sections/ideeUtilisation";
import EtudesCoverstyle from "../../components/sections/sections/edudesCoverstyle";
import Hero from "../../components/sections/sections/hero";
import Projects from "../../components/sections/sections/projects";
export default function Professionnel() {
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
      <Hero page="professionnel" />
      {/*    <MainNav /> */}
      <Service />
      <SectionImageText
        title="COVERING"
        text="L'arme secrète des pros pour rénover sans contrainte. Modernisez vos espaces, sans interrompre votre activité."
        image="/images/hall.png"
        bgColor="bg-primary"
        textColor="text-white"
      />
      <SectionImageText
        title="MON A TOUT POUR LES PROS"
        text="Le covering, c'est un revêtement adhésif haut de gamme imitant le bois, marbre, métal ou cuir. Pose rapide, sans bruit ni poussière, sans travaux lourds."
        image="/images/hotelAP.png"
        reverse
        bgColor="bg-primary-100"
        textColor="text-primary"
      />
      <SectionImageText
        title="POURQUOI CHOISIR CETTE SOLUTION ?"
        text="Gagnez du temps, réduisez vos coûts et sublimez vos lieux sans fermer vos portes. Donnez une seconde vie à vos espaces en toute simplicité."
        image="/images/meubleAP.png"
        bgColor="bg-secondary"
        textColor="text-white"
      />
      <DoubleChecklist />
      <IdeeUtilisation />
      <EtudesCoverstyle />
      <Projects />
      <Step />
      <Reviews />
      <MultiStepForm />

      {/*    <Service />
      <Profil />
      <Projects />
      <Step />
      <Reviews />
      <MultiStepForm /> */}
    </>
  );
}
