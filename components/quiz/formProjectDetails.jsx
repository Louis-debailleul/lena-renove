// components/quiz/FormGeneralInfo.jsx
import React, { useEffect } from "react";
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
import { z } from "zod";
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
          <FormItem className="space-y-3">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <CustomRadioGroup
                name={name}
                value={field.value}
                onChange={handleRadioChange}
                options={options}
                className={className}
              />
            </FormControl>
            <FormMessage />
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
      className="space-y-6"
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
                <FormLabel>Autre type de projet</FormLabel>
                <FormControl>
                  <Input placeholder="autre type de projet" {...field} />
                </FormControl>
                <FormMessage />
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
                <FormLabel>Dites-nous en plus</FormLabel>
                <FormControl>
                  <Input placeholder="autre type de projet" {...field} />
                </FormControl>
                <FormMessage />
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
