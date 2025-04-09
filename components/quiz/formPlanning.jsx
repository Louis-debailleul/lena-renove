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
import { Textarea } from "../ui/textarea";

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
      {methods.watch("hearAboutMe") === "autre" && (
        <FormField
          control={methods.control}
          name="hearAboutMeOther"
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
      <FormField
        control={methods.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nom</FormLabel>
            <FormControl>
              <Input placeholder="autre type de projet" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={methods.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Téléphone</FormLabel>
            <FormControl>
              <Input placeholder="autre type de projet" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={methods.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="autre type de projet" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={methods.control}
        name="otherInfo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Autre information</FormLabel>
            <FormControl>
              <Textarea placeholder="Type your message here." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default FormProjectDetails;
