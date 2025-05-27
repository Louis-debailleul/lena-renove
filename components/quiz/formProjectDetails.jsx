// components/quiz/FormGeneralInfo.jsx
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
import { motion } from "framer-motion";

const FormProjectDetails = ({ methods }) => {
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
        "projectType",
        "Quel type de projet souhaitez-vous réaliser ?",
        FORM_OPTIONS.projectType
      )}

      {methods.watch("projectType") === "autre" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FormField
            control={methods.control}
            name="projectTypeOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg font-medium text-gray-800">
                  Autre type de projet
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Décrivez votre projet"
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

      {renderFormField(
        "priceRange",
        "Quelle est la fourchette de prix prévue pour votre projet ?",
        FORM_OPTIONS.priceRange
      )}

      {renderFormField(
        "preferencesStyle",
        "Avez-vous des préférences en termes de matériaux ou de styles ?",
        FORM_OPTIONS.preferencesStyle
      )}

      {methods.watch("preferencesStyle") === "oui" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FormField
            control={methods.control}
            name="preferencesStyleOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg font-medium text-gray-800">
                  Dites-nous en plus sur vos préférences
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Matériaux, couleurs, styles préférés..."
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

      {renderFormField(
        "supplyOfMaterials",
        "Souhaitez-vous que je m'occupe également de la fourniture des matériaux ?",
        FORM_OPTIONS.supplyOfMaterials
      )}
    </motion.div>
  );
};

export default FormProjectDetails;
