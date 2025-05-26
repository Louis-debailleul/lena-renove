import Section from "./section";

export default function Step() {
  const steps = [
    {
      icon: "quiz",
      title: "Tout commence par un QCM rapide",
      content: `  Définissez les grandes lignes de votre projet en quelques minutes avec notre QCM rapide et intuitif.
               `,
    },
    {
      icon: "phone_forwarded",
      title: "Contact Direct et Précis",
      content: `  Pour l'étape du premier contact téléphonique visant à affiner les détails de la demande.
               `,
    },
    {
      icon: "home_pin",
      title: "Rendez-vous",
      content: ` Pour la rencontre sur le site du projet afin d'évaluer les besoins spécifiques.
               `,
    },
    {
      icon: "receipt_long",
      title: "Élaboration Du devis",
      content: `Pour l'élaboration d'un devis qui répond précisément aux attentes du client.
               `,
    },
    // Vous pouvez ajouter d'autres prestations ici
  ];

  return (
    <Section className="bg-primary-100">
      <h2 className="text-primary text-4xl mb-12">
        LES ETAPES DE VOTRE PROJET
      </h2>
      <div className="flex flex-row overflow-x-auto snap-x snap-mandatory lg:flex-wrap  lg:overflow-visible  gap-4 lg:gap-6 pb-6">
        {steps.map((item, index) => (
          <div className="max-w-md min-w-80 lg:max-w-xs mx-auto">
            <span className="text-primary text-6xl block text-center font-meddon mb-6">
              0{index + 1}
            </span>
            <h3 className="text-primary text-2xl md:text-3xl xl:text-4xl ">
              {item.title}
            </h3>
            <p className="text-lg max-w-[60ch] text-secondary">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
