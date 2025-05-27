"use client";
import Section from "./section";
import { motion } from "framer-motion";

export default function Step() {
  const steps = [
    {
      id: 1,
      title: "QCM Rapide",
      content:
        "Définissez les grandes lignes de votre projet en quelques minutes.",
    },
    {
      id: 2,
      title: "Contact Direct",
      content:
        "Premier contact téléphonique pour affiner les détails de votre demande.",
    },
    {
      id: 3,
      title: "Rendez-vous",
      content:
        "Rencontre sur le site du projet pour évaluer les besoins spécifiques.",
    },
    {
      id: 4,
      title: "Devis Détaillé",
      content: "Élaboration d'un devis personnalisé qui répond à vos attentes.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Section
      className="py-12 md:py-16 lg:py-20 bg-primary-100"
      childClassName="max-w-6xl w-full mx-auto  lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
          Les étapes de votre projet
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-4 md:pb-0 scrollbar-hide"
      >
        {steps.map((step) => (
          <motion.div
            key={step.id}
            variants={item}
            className="text-center flex-shrink-0 w-72 md:w-auto"
          >
            <div className="text-primary text-5xl md:text-6xl font-playfair font-bold mb-4">
              0{step.id}
            </div>

            <h3 className="text-primary text-xl md:text-2xl font-playfair font-semibold mb-3">
              {step.title}
            </h3>

            <p className="text-secondary text-base leading-relaxed">
              {step.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
