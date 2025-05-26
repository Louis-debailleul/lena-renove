"use client";
import React, { useState, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ContentTextDecor from "../ui/contentTextDecor";
import ImgContent from "../imgContent";
import StepBar from "./stepBar";
import emailjs from "emailjs-com";
import { FORM_OPTIONS } from "./constForm";
import { motion, AnimatePresence } from "framer-motion";

// Import des composants du Form de shadcn/ui
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import FormGeneralInfo from "./formGeneralInfo";
import FormProjectDetails from "./formProjectDetails";
import CustomRadioGroup from "../ui/customRadioGroup";
import { OtherHouses } from "@mui/icons-material";
import FormPlanning from "./formPlanning";
import Section from "../sections/sections/section";
// Schémas de validation Zod pour chaque étape
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
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [allData, setAllData] = useState({});

  const methods = useForm({
    resolver: zodResolver(
      step === 1 ? step1Schema : step === 2 ? step2Schema : step3Schema
    ),
    defaultValues: {
      userType: allData.userType,
      whoAreYou: allData.whoAreYou,
      whoAreYouOther: allData.whoAreYouOther,
      isProprietor: allData.isProprietor,
      city: allData.city,

      projectType: allData.projectType,
      projectTypeOther: allData.projectTypeOther,
      priceRange: allData.priceRange,
      preferencesStyle: allData.preferencesStyle,
      preferencesStyleOther: allData.preferencesStyleOther,
      supplyOfMaterials: allData.supplyOfMaterials,

      startOfWork: allData.startOfWork,
      hearAboutMe: allData.hearAboutMe,
      hearAboutMeOther: allData.hearAboutMeOther,
      isWorkingCraftsman: allData.isWorkingCraftsman,
      OtherInfo: allData.OtherInfo,
      name: allData.name,
      email: allData.email,
      phone: allData.phone,
    },
    mode: "onChange",
  });
  const formRef = useRef(null);

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

    const templateParams = {
      userType: finalData.userType,
      whoAreYou: finalData.whoAreYou,
      whoAreYouOther: finalData.whoAreYouOther,
      isProprietor: finalData.isProprietor,
      city: finalData.city,
      projectType: finalData.projectType,
      projectTypeOther: finalData.projectTypeOther,
      priceRange: finalData.priceRange,
      preferencesStyle: finalData.preferencesStyle,
      preferencesStyleOther: finalData.preferencesStyleOther,
      supplyOfMaterials: finalData.supplyOfMaterials,
      startOfWork: finalData.startOfWork,
      hearAboutMe: finalData.hearAboutMe,
      hearAboutMeOther: finalData.hearAboutMeOther,
      isWorkingCraftsman: finalData.isWorkingCraftsman,
      otherInfo: finalData.otherInfo,
      name: finalData.name,
      email: finalData.email,
      phone: finalData.phone,
    };
    console.log(templateParams);
    setStep(4);
    if (errors.length > 0) {
      setStep(5);
    }
    /*     emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then((response) => {
        console.log(
          "Email envoyé avec succès!",
          response.status,
          response.text
        );
      })
      .catch((err) => {
        console.error("Erreur lors de l'envoi de l'email:", err);
      });
  };

  const onError = (errors) => {
    console.log("Erreurs de validation:", errors); */
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <Section
      colors={["bg-primary", "bg-secondary", "bg-white"]}
      className="relative mx-auto py-4 px-2"
      childClassName="max-w-3xl w-auto md:mx-auto min-w-80 px-2 py-8 md:p-6"
    >
      {step > 1 && step <= 4 && <StepBar currentStep={step} />}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-primary mb-6  
           text-4xl/9  
           md:text-5xl"
          >
            Contacter moi en quelques clics
          </h2>
          <p className="max-w-[60ch] text-secondary mb-8">
            Prenez quelques secondes pour remplir ce questionnaire rapide. Il me
            permettra de mieux comprendre vos besoins et de vous faire gagner du
            temps pour la suite de votre projet. Grâce à ces informations, je
            pourrai adapter mes services à vos besoins et budget.
          </p>
        </motion.div>
      )}
      <FormProvider {...methods}>
        <form
          className="space-y-4"
          onSubmit={methods.handleSubmit(step < 3 ? onNext : onSubmitFinal)}
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
            >
              {step === 1 && <FormGeneralInfo methods={methods} />}
              {step === 2 && <FormProjectDetails methods={methods} />}
              {step === 3 && <FormPlanning methods={methods} />}
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="flex justify-end space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {step < 4 && step > 1 && step !== 4 && (
              <Button className="bg-primary" type="button" onClick={onPrevious}>
                Précédent
              </Button>
            )}
            {step < 4 && (
              <Button className="bg-primary" type="submit">
                {step < 3 ? "Suivant" : "Soumettre"}
              </Button>
            )}
          </motion.div>
        </form>
      </FormProvider>
      {step === 4 && (
        <div className="flex justify-center items-center ">
          <p className="text-gray-500 py-40">
            Merci pour votre demande, je reviendrai vers vous dans les plus
            brefs délais.
          </p>
        </div>
      )}
      {step === 5 && (
        <div className="flex justify-center items-center">
          <p className="text-gray-500 py-40">
            Un probleme est survenu lors de l'envoi de votre demande, veuillez
            réessayer plus tard.
          </p>
        </div>
      )}
    </Section>
  );
}

export default MultiStepForm;
