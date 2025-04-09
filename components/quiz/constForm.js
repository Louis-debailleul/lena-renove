// constants/formOptions.js
export const FORM_OPTIONS = {
  userType: [
    { value: "particulier", label: "Particulier" },
    { value: "professionnel", label: "Professionnel" },
  ],
  whoAreYou: [
    { value: "moi", label: "Pour-Moi" },
    { value: "autre", label: "Pour-Autre" },
  ],
  isProprietor: [
    { value: "true", label: "Oui" },
    { value: "false", label: "Non" },
  ],
  projectType: [
    { value: "rénovation globale", label: "Rénovation globale" },
    {
      value: "rénovation d’un espace spécifique",
      label: "Rénovation d’un espace spécifique",
    },
    { value: "un dégâts des eaux", label: "un dégâts des eaux" },
    {
      value: "rénovation ou aménagement d’un commerce",
      label: "Rénovation ou aménagement d’un commerce",
    },
    { value: "autre", label: "autre" },
  ],
  priceRange: [
    { value: "1000 à 5000", label: "1000 € à 5000 €" },
    { value: "5000 à 10000", label: "5000 € à 10000 €" },
    { value: "10000 à 15000", label: "10000 € à 15000 €" },
    { value: "plus de 15000", label: "plus de 15000 €" },
  ],
  preferencesStyle: [
    { value: "oui", label: "Oui" },
    { value: "non", label: "Non" },
  ],
  supplyOfMaterials: [
    { value: "oui", label: "Oui" },
    { value: "non", label: "Non" },
  ],
  startOfWork: [
    { value: "Moins de 1 mois", label: "Moins de 1 mois" },
    { value: "1 à 3 mois", label: "1 à 3 mois" },
    { value: "3 à 6 mois", label: "3 à 6 mois" },
    { value: "Plus de 6 mois", label: "Plus de 6 mois" },
  ],
  hearAboutMe: [
    { value: "Bouche-à-oreille", label: "Bouche-à-oreille" },
    { value: "Réseaux sociaux", label: "Réseaux sociaux" },
    { value: "Site web", label: "Site web" },
    { value: "Autre", label: "Autre" },
  ],
  isWorkingCraftsman: [
    { value: "oui", label: "Oui" },
    { value: "non", label: "Non" },
  ],
};
