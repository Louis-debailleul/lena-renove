"use client";
import React, { useState, useRef, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import StepBar from "./stepBar";
import emailjs from "emailjs-com";
import { FORM_OPTIONS } from "./constForm";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

// Import des composants du Form de shadcn/ui
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormGeneralInfo from "./formGeneralInfo";
import FormProjectDetails from "./formProjectDetails";
import FormPlanning from "./formPlanning";
import Section from "../sections/sections/section";

// Schémas de validation (gardés identiques)
export const step1Schema = z
  .object({
    userType: z.enum(["particulier", "professionnel"], {
      required_error: "Veuillez sélectionner votre type d'utilisateur",
    }),
    whoAreYou: z.enum(["moi", "autre"], {
      required_error: "Veuillez indiquer pour qui vous faites cette démarche",
    }),
    whoAreYouOther: z.string().optional(),
    isProprietor: z.enum(["true", "false"], {
      required_error: "Veuillez indiquer si vous êtes le propriétaire",
    }),
    city: z.string().min(1, "Veuillez indiquer la ville"),
  })
  .superRefine((data, ctx) => {
    if (
      data.whoAreYou === "autre" &&
      (!data.whoAreYouOther || data.whoAreYouOther.trim() === "")
    ) {
      ctx.addIssue({
        path: ["whoAreYouOther"],
        code: z.ZodIssueCode.custom,
        message:
          "Ce champ est requis si vous faites la démarche pour quelqu'un d'autre",
      });
    }
  });

const step2Schema = z.object({
  projectType: z.enum(
    [
      "rénovation globale",
      "rénovation d'un espace spécifique",
      "un dégâts des eaux",
      "rénovation ou aménagement d'un commerce",
      "autre",
    ],
    {
      required_error: "Veuillez sélectionner votre type de projet",
    }
  ),
  projectTypeOther: z.string().optional(),
  priceRange: z.enum(
    ["1000 à 5000", "5000 à 10000", "10000 à 15000", "plus de 15000"],
    {
      required_error: "Veuillez sélectionner votre fourchette de prix",
    }
  ),
  preferencesStyle: z.enum(["oui", "non"], {
    required_error:
      "Veuillez indiquer si vous avez des préférences en termes de matériaux ou de styles",
  }),
  preferencesStyleOther: z.string().optional(),
  supplyOfMaterials: z.enum(["oui", "non"], {
    required_error:
      "Veuillez indiquer si vous souhaitez que je m'occupe également de la fourniture des matériaux",
  }),
});

const step3Schema = z
  .object({
    startOfWork: z.enum(
      FORM_OPTIONS.startOfWork.map((option) => option.value),
      {
        required_error:
          "Veuillez sélectionner un délai pour le début des travaux",
      }
    ),
    isWorkingCraftsman: z.enum(
      FORM_OPTIONS.isWorkingCraftsman.map((option) => option.value),
      {
        required_error:
          "Veuillez indiquer si vous avez déjà travaillé avec un artisan",
      }
    ),
    hearAboutMe: z.enum(
      FORM_OPTIONS.hearAboutMe.map((option) => option.value),
      {
        required_error:
          "Veuillez indiquer comment vous avez entendu parler de mes services",
      }
    ),
    hearAboutMeOther: z.string().optional(),
    name: z.string().min(1, "Veuillez entrer votre nom"),
    phone: z
      .string()
      .min(10, "Le téléphone doit contenir au moins 10 chiffres"),
    email: z.string().email("Email invalide"),
    otherInfo: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (
      data.hearAboutMe === "Autre" &&
      (!data.hearAboutMeOther || data.hearAboutMeOther.trim() === "")
    ) {
      ctx.addIssue({
        path: ["hearAboutMeOther"],
        code: z.ZodIssueCode.custom,
        message: "Ce champ est requis si vous avez sélectionné 'Autre'",
      });
    }
  });

function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [allData, setAllData] = useState({});

  const searchParams = useSearchParams();

  const methods = useForm({
    resolver: zodResolver(
      step === 1
        ? step1Schema
        : step === 2
        ? step2Schema
        : step === 3
        ? step3Schema
        : z.object({})
    ),
    defaultValues: {
      userType: allData.userType || "",
      whoAreYou: allData.whoAreYou || "",
      whoAreYouOther: allData.whoAreYouOther || "",
      isProprietor: allData.isProprietor || "",
      city: allData.city || "",
      projectType: allData.projectType || "",
      projectTypeOther: allData.projectTypeOther || "",
      priceRange: allData.priceRange || "",
      preferencesStyle: allData.preferencesStyle || "",
      preferencesStyleOther: allData.preferencesStyleOther || "",
      supplyOfMaterials: allData.supplyOfMaterials || "",
      startOfWork: allData.startOfWork || "",
      hearAboutMe: allData.hearAboutMe || "",
      hearAboutMeOther: allData.hearAboutMeOther || "",
      isWorkingCraftsman: allData.isWorkingCraftsman || "",
      otherInfo: allData.otherInfo || "",
      name: allData.name || "",
      email: allData.email || "",
      phone: allData.phone || "",
    },
    mode: "onChange",
  });

  const formRef = useRef(null);

  // Vérifier si l'utilisateur vient d'un lien direct
  useEffect(() => {
    const directLink = searchParams.get("start");
    if (directLink === "true") {
      setStep(1);
    }

    // Écouter l'événement personnalisé pour démarrer le formulaire
    const handleStartForm = () => {
      setStep(1);
    };

    window.addEventListener("startForm", handleStartForm);

    return () => {
      window.removeEventListener("startForm", handleStartForm);
    };
  }, [searchParams]);

  const onNext = (data) => {
    setDirection(1);
    setAllData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const onPrevious = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const onSubmitFinal = (data) => {
    const finalData = { ...allData, ...data };
    console.log("Formulaire soumis :", finalData);
    setStep(4);
  };

  const startForm = () => {
    setDirection(1);
    setStep(1);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <Section
      colors={["bg-primary", "bg-secondary", "bg-white"]}
      className="relative py-12 md:py-16 lg:py-20"
      childClassName="max-w-5xl w-full mx-auto"
      id="contact"
    >
      {/* Container principal avec le style de votre site */}
      <div className="bg-white shadow-2xl overflow-hidden">
        {/* En-tête avec gradient */}
        <div className="px-6 md:px-8 lg:px-12 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl text-primary md:text-3xl lg:text-4xl xl:text-5xl font-playfair mb-4 md:mb-6 leading-tight">
              Contactez-moi en quelques clics
            </h2>
            <p className="text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed">
              Prenez quelques secondes pour remplir ce questionnaire rapide. Il
              me permettra de mieux comprendre vos besoins et de vous faire
              gagner du temps pour la suite de votre projet.
            </p>
          </motion.div>
        </div>

        {/* Contenu du formulaire */}
        <div className="px-6 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Barre de progression - seulement si on a commencé le formulaire */}
          {step >= 1 && step <= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 md:mb-12"
            >
              <StepBar currentStep={step} />
            </motion.div>
          )}

          {/* État neutre - avant de commencer le formulaire */}
          {step === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="max-w-3xl mx-auto ">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    onClick={startForm}
                    className="px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Me contacter
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Formulaire - seulement si on a commencé */}
          {step >= 1 && (
            <FormProvider {...methods}>
              <form
                className="space-y-6 md:space-y-8"
                onSubmit={methods.handleSubmit(
                  step < 3 ? onNext : onSubmitFinal
                )}
                ref={formRef}
              >
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="min-h-[400px] md:min-h-[500px]"
                  >
                    {step === 1 && <FormGeneralInfo methods={methods} />}
                    {step === 2 && <FormProjectDetails methods={methods} />}
                    {step === 3 && <FormPlanning methods={methods} />}
                  </motion.div>
                </AnimatePresence>

                {/* Boutons de navigation avec le style de votre site */}
                {step <= 3 && (
                  <motion.div
                    className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 md:pt-12 border-t border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex-1">
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={onPrevious}
                          className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/20"
                        >
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                            Précédent
                          </span>
                        </button>
                      )}
                    </div>

                    <div className="flex-1 flex justify-end">
                      <Button type="submit">
                        <span className="flex items-center justify-center gap-2">
                          {step < 3 ? (
                            <>
                              Suivant
                              <svg
                                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </>
                          ) : (
                            <>
                              Envoyer ma demande
                              <svg
                                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                              </svg>
                            </>
                          )}
                        </span>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>
            </FormProvider>
          )}

          {/* Messages de confirmation avec le style de votre site */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12 md:py-16 lg:py-20"
            >
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
                  <svg
                    className="w-10 h-10 md:w-12 md:h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-primary text-2xl md:text-3xl lg:text-4xl font-playfair mb-4 md:mb-6 leading-tight">
                  Merci pour votre demande !
                </h3>
                <p className="text-secondary text-base md:text-lg lg:text-xl leading-relaxed mb-8">
                  Je reviendrai vers vous dans les plus brefs délais pour
                  discuter de votre projet.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 md:p-8">
                  <p className="text-primary text-sm md:text-base font-medium">
                    💡 En attendant, n'hésitez pas à consulter mes réalisations
                    et témoignages clients sur le site.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Section>
  );
}

export default MultiStepForm;
