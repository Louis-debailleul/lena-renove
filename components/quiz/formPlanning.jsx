"use client";
import React from "react";
import { FORM_OPTIONS } from "./constForm";
import CustomRadioGroup from "../ui/customRadioGroup";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";

const FormPlanning = ({ methods }) => {
  const handleRadioChange = (name, value) => {
    methods.setValue(name, value, { shouldValidate: true });
  };

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

  const renderFormField = (name, label, options, className = "") => (
    <motion.div variants={item}>
      <FormField
        control={methods.control}
        name={name}
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
              {label}
            </FormLabel>
            <FormControl>
              <CustomRadioGroup
                name={name}
                value={field.value}
                onChange={handleRadioChange}
                options={options}
                className={`flex flex-wrap gap-3 md:gap-4 ${className}`}
              />
            </FormControl>
            <FormMessage className="text-sm text-red-600" />
          </FormItem>
        )}
      />
    </motion.div>
  );

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 md:space-y-8"
    >
      {renderFormField(
        "startOfWork",
        "Quel est le délai idéal pour la réalisation des travaux ?",
        FORM_OPTIONS.startOfWork
      )}

      {renderFormField(
        "isWorkingCraftsman",
        "Avez-vous déjà travaillé avec un artisan pour des projets similaires ?",
        FORM_OPTIONS.isWorkingCraftsman
      )}

      {renderFormField(
        "hearAboutMe",
        "Comment avez-vous entendu parler de mes services ?",
        FORM_OPTIONS.hearAboutMe
      )}

      {methods.watch("hearAboutMe") === "Autre" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FormField
            control={methods.control}
            name="hearAboutMeOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg font-medium text-gray-800">
                  Dites-nous en plus
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Comment avez-vous entendu parler de nous ?"
                    {...field}
                    className="w-full p-3 md:p-4 text-base border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600" />
              </FormItem>
            )}
          />
        </motion.div>
      )}

      {/* Section informations de contact */}
      <motion.div
        variants={item}
        className="pt-6 md:pt-8 border-t border-gray-200"
      >
        <h3 className="text-lg md:text-xl font-playfair font-medium text-primary mb-6">
          Vos informations de contact
        </h3>
        <div className="space-y-6">
          <FormField
            control={methods.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg font-medium text-gray-800">
                  Nom complet
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Votre nom et prénom"
                    {...field}
                    className="w-full p-3 md:p-4 text-base border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg font-medium text-gray-800">
                  Téléphone
                </FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    {...field}
                    className="w-full p-3 md:p-4 text-base border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600" />
              </FormItem>
            )}
          />

          <FormField
            control={methods.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg font-medium text-gray-800">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Votre adresse email"
                    {...field}
                    className="w-full p-3 md:p-4 text-base border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-600" />
              </FormItem>
            )}
          />
        </div>
      </motion.div>

      <motion.div variants={item}>
        <FormField
          control={methods.control}
          name="otherInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base md:text-lg font-medium text-gray-800">
                Informations complémentaires (optionnel)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Décrivez votre projet plus en détail, vos contraintes particulières, vos questions..."
                  {...field}
                  className="w-full p-3 md:p-4 text-base border-2 border-gray-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 min-h-[120px] resize-none"
                />
              </FormControl>
              <FormMessage className="text-sm text-red-600" />
            </FormItem>
          )}
        />
      </motion.div>
    </motion.div>
  );
};

export default FormPlanning;
