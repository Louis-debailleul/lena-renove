import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-100 flex flex-col">
      {/* Section du logo et titre */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12 lg:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Image
            src="/images/logoGrandCouleur.svg"
            alt="Logo Léna Rénove"
            priority
            width={391}
            height={465}
            decoding="async"
            className="mx-auto w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 h-auto"
            quality={90}
          />
          <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-playfair text-primary mt-4 md:mt-6 lg:mt-8 leading-tight px-2">
            Ensemble, redonnons du style au durable !
          </p>
        </div>
      </div>

      {/* Section des liens */}
      <div className="flex flex-col md:flex-row min-h-[50vh] md:min-h-[60vh]">
        <Link
          className="flex-1 relative group overflow-hidden"
          href="/particulier"
        >
          <Image
            src="/images/particulier.png"
            alt="Section Particulier"
            width={723}
            height={348}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-playfair flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center px-4 drop-shadow-lg">
              Particulier
              <Image
                src="/images/arrow.png"
                alt="Flèche"
                width={24}
                height={24}
                className="w-6 sm:w-8 md:w-10 lg:w-12 h-auto transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
        </Link>

        <Link
          className="flex-1 relative group overflow-hidden"
          href="/professionnel"
        >
          <Image
            src="/images/pro.png"
            alt="Section Professionnel"
            width={723}
            height={348}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-playfair flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center px-4 drop-shadow-lg">
              Professionnel
              <Image
                src="/images/arrow.png"
                alt="Flèche"
                width={24}
                height={24}
                className="w-6 sm:w-8 md:w-10 lg:w-12 h-auto transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
