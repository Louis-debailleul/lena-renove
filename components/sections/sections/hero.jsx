import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ContactButton from "../../../components/ui/contactButton";

export default function Hero({ page = "particulier" }) {
  return (
    <div className="relative w-full h-[100vh] max-h-[650px] flex items-center justify-center bg-white mb-8 md:mb-16 lg:mb-20">
      <Image
        src={
          page === "particulier"
            ? "/images/particuliers.png"
            : "/images/pro.png"
        }
        alt="hero"
        fill
        className="object-cover w-full h-full absolute inset-0"
        priority
      />

      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className="absolute w-11/12 -bottom-8 md:-bottom-12 lg:-bottom-16 mx-4 md:mx-6 lg:mx-8 text-primary py-8 md:py-12 lg:py-16 px-6 md:px-8 lg:px-10 bg-white shadow-sm rounded-sm max-w-4xl lg:w-full">
        <div className="text-center">
          <Image
            src="/images/logoGrandCouleur.svg"
            alt="logo"
            className="w-full mx-auto mb-6 md:mb-8 max-w-48 md:max-w-60"
            width={100}
            height={100}
          />

          <h1 className="text-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-playfair mx-auto mb-4 md:mb-6 leading-tight">
            {page === "particulier"
              ? "Embellez votre intérieur avec un artisan à votre écoute"
              : "Des prestations fiables et efficaces pour vos locaux professionnels"}
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed">
            {page === "particulier"
              ? "Peinture, décoration, rénovation — pour un chez-vous qui vous ressemble, réalisé avec soin et passion."
              : "Travaux de peinture et rénovation pour bureaux, commerces et établissements, dans le respect des délais et des normes."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-6 md:mb-8">
            <Button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
              <Link href="#realisations">Mes réalisations</Link>
            </Button>

            <ContactButton className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
              Me contacter
            </ContactButton>
          </div>

          {page === "particulier" ? (
            <Link
              href="/professionnel"
              className="text-sm md:text-base text-gray-600 hover:text-primary transition-colors duration-200 underline"
            >
              Pour les professionnels
            </Link>
          ) : (
            <Link
              href="/particulier"
              className="text-sm md:text-base text-gray-600 hover:text-primary transition-colors duration-200 underline"
            >
              Pour les particuliers
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
