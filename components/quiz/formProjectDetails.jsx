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

const FormProjectDetails = ({ methods }) => {
  const handleRadioChange = (name, value) => {
    methods.setValue(name, value, { shouldValidate: true });
  };

  const renderFormField = (name, label, options, className = "") => (
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
  );

  return (
    <>
      {renderFormField(
        "projectType",
        "Quel type de projet souhaitez-vous réaliser ?",
        FORM_OPTIONS.projectType
      )}
      {methods.watch("projectType") === "autre" && (
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
      )}
      {renderFormField(
        "supplyOfMaterials",
        "Souhaitez-vous que je m’occupe également de la fourniture des matériaux ?",
        FORM_OPTIONS.supplyOfMaterials
      )}
    </>
  );
};

export default FormProjectDetails;
