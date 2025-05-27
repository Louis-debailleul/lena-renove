import CheckIcon from "@mui/icons-material/Check";
import SavingsIcon from "@mui/icons-material/Savings";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import PaletteIcon from "@mui/icons-material/Palette";
import SecurityIcon from "@mui/icons-material/Security";
import NatureIcon from "@mui/icons-material/Nature";
import FitnessIcon from "@mui/icons-material/FitnessCenter";
import Section from "./section";
import { Button } from "../../ui/button";
import Link from "next/link";

const points = [
  {
    text: "Jusqu'à 70 % d'économies",
    subtitle: "vs. rénovation classique",
    icon: <SavingsIcon className="text-white" />,
  },
  {
    text: "Installation rapide",
    subtitle: "sans poussière ni interruption d'activité",
    icon: <FlashOnIcon className="text-white" />,
  },
  {
    text: "Plus de 500 textures",
    subtitle: "(bois, marbre, métal, textile…)",
    icon: <PaletteIcon className="text-white" />,
  },
];

const points2 = [
  {
    text: "Haute durabilité",
    subtitle: "(garantie jusqu'à 10 ans)",
    icon: <SecurityIcon className="text-white" />,
  },
  {
    text: "Démarche écoresponsable",
    subtitle: "(zéro démolition, zéro gaspillage)",
    icon: <NatureIcon className="text-white" />,
  },
  {
    text: "Résistance",
    subtitle: "au UV, au chaud et à l'humidité",
    icon: <FitnessIcon className="text-white" />,
  },
];

export default function DoubleChecklist() {
  return (
    <Section className="bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}

      <div className="relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="text-primary-100 text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
            Pourquoi choisir Coverstyle ?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Découvrez tous les avantages de notre solution innovante
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Première colonne */}
          <div className="space-y-6">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-sm p-3 md:p-8 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl md:text-3xl backdrop-blur-sm border border-white/30">
                      {point.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl mb-2 leading-tight">
                      {point.text}
                    </h3>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                      {point.subtitle}
                    </p>
                  </div>
                  <CheckIcon className="text-white/60 w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Deuxième colonne */}
          <div className="space-y-6">
            {points2.map((point, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-3 md:p-8 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 rounded-full flex items-center justify-center text-2xl md:text-3xl backdrop-blur-sm border border-white/30">
                      {point.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg md:text-xl lg:text-2xl mb-2 leading-tight">
                      {point.text}
                    </h3>
                    <p className="text-white/80 text-base md:text-lg leading-relaxed">
                      {point.subtitle}
                    </p>
                  </div>
                  <CheckIcon className="text-white/60 w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton centré amélioré */}
        <div className="flex justify-center mt-12 md:mt-16 lg:mt-20">
          <Link href="#contact">
            <Button variant="secondary">Me contacter</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
