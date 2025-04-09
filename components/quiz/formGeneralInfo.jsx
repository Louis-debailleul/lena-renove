"use client";
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

const FormGeneralInfo = ({ methods }) => {
  const handleRadioChange = (name, value) => {
    methods.setValue(name, value, { shouldValidate: true });
  };

  const renderFormField = (name, label, options, className = "") => (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem>
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
      {renderFormField("userType", "Qui êtes vous ?", FORM_OPTIONS.userType)}
      {renderFormField(
        "whoAreYou",
        "Vous faites cette démarche pour vous ou quelqu'un d'autre ?",
        FORM_OPTIONS.whoAreYou
      )}
      {methods.watch("whoAreYou") === "autre" && (
        <FormField
          control={methods.control}
          name="whoAreYouOther"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pour qui ?</FormLabel>
              <FormControl>
                <Input placeholder="pour qui" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      {renderFormField(
        "isProprietor",
        "Êtes-vous le propriétaire du bien concerné par les travaux ?",
        FORM_OPTIONS.isProprietor
      )}
      <FormField
        control={methods.control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Dans quelle ville souhaitez-vous réaliser vos travaux ?
            </FormLabel>
            <FormControl>
              <Input placeholder="ville" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default FormGeneralInfo;
