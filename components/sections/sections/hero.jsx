import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero({ page = "particulier" }) {
  return (
    <div className="relative w-full h-[558px] flex items-center justify-center bg-white mb-16">
      <Image
        src={
          page === "particulier" ? "/images/Particulier.png" : "/images/pro.png"
        }
        alt="hero"
        fill
        className="object-cover w-full h-full absolute top-0 left-0"
        priority
      />
      <div className="absolute -bottom-16 mx-2 text-primary py-12 md:py-16 pt-4  px-4 bg-white  shadow-sm max-w-2xl ">
        <Image
          src="/images/logoMoyenCouleur.png"
          alt="logo"
          className="w-full mx-auto mb-4 max-w-80"
          width={100}
          height={100}
        />
        <h1 className="text-primary text-4xl mx-auto mb-4 md:text-center">
          {page === "particulier"
            ? "Embellez votre intérieur avec un artisan à votre écoute"
            : "Des prestations fiables et efficaces pour vos locaux professionnels"}
        </h1>
        <p className="max-w-prose lg:w-4/5 mx-auto text-lg mb-8 md:text-center">
          {page === "particulier"
            ? "Peinture, décoration, rénovation — pour un chez-vous qui vous ressemble, réalisé avec soin et passion."
            : "Travaux de peinture et rénovation pour bureaux, commerces et établissements, dans le respect des délais et des normes."}
        </p>
        <div className="mb-4 mx-auto flex flex-row gap-6 justify-center">
          <Button>Mes réalisations</Button>
          <Button>Me contacter</Button>
        </div>
        {page === "particulier" ? (
          <Link href="/professionnel" className="text-sm text-center block">
            Pour les professionnels
          </Link>
        ) : (
          <Link href="/particulier" className="text-sm text-center block">
            Pour les particuliers
          </Link>
        )}
      </div>
    </div>
  );
}
