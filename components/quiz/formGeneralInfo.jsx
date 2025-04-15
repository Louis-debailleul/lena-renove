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
import { motion } from "framer-motion";

const FormGeneralInfo = ({ methods }) => {
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
    </motion.div>
  );

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {renderFormField("userType", "Qui êtes vous ?", FORM_OPTIONS.userType)}
      {renderFormField(
        "whoAreYou",
        "Vous faites cette démarche pour vous ou quelqu'un d'autre ?",
        FORM_OPTIONS.whoAreYou
      )}
      {methods.watch("whoAreYou") === "autre" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
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
        </motion.div>
      )}
      {renderFormField(
        "isProprietor",
        "Êtes-vous le propriétaire du bien concerné par les travaux ?",
        FORM_OPTIONS.isProprietor
      )}
      <motion.div variants={item}>
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
      </motion.div>
    </motion.div>
  );
};

export default FormGeneralInfo;
