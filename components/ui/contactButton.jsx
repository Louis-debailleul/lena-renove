"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./button";

const ContactButton = ({
  children = "Me contacter",
  className = "",
  variant = "default",
  size = "default",
  formSection = "contact", // ID de la section du formulaire
}) => {
  const handleClick = () => {
    // Scroll vers la section du formulaire avec le paramètre pour démarrer directement
    const formElement = document.getElementById(formSection);
    if (formElement) {
      // Ajouter le paramètre à l'URL pour démarrer le formulaire
      const url = new URL(window.location);
      url.searchParams.set("start", "true");
      window.history.pushState({}, "", url);

      // Scroll vers le formulaire
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Déclencher un événement personnalisé pour notifier le formulaire
      window.dispatchEvent(new CustomEvent("startForm"));
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
};

export default ContactButton;
