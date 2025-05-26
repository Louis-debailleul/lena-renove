import Section from "./section";
const idees = [
  { label: "SALLE DE BAIN", image: "/images/salleDeBain.png" },
  { label: "MUR", image: "/images/mur.jpg" },
  { label: "PLINTHES", image: "/images/plinthe.jpg" },
  { label: "MEUBLE", image: "/images/meuble.jpg" },
  { label: "PORTE", image: "/images/porte.jpg" },
  { label: "ASSENCEUR", image: "/images/assenceur.jpg" },
];

export default function IdeeUtilisation() {
  return (
    <Section className="bg-secondary pl-6 pr-0">
      <h2 className="text-white text-4xl mb-12">
        IDÉE D’UTILISATION DU COVERS
      </h2>
      <div className="flex flex-row  lg:grid lg:grid-cols-3 overflow-x-auto snap-x snap-mandatory gap-4 lg:gap-6 mb-12">
        {idees.map((idee, idx) => (
          <div
            key={idx}
            className="relative min-w-80 h-48 flex items-center justify-center"
          >
            <img
              src={idee.image}
              alt={idee.label}
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white text-2xl font-playfair bg-black/30">
              {idee.label}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
