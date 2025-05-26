import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary-100">
      <div className="text-center h-1/3 flex flex-col items-center justify-center p-6">
        <Image
          src="/images/logoMoyenCouleur.png"
          alt="Logo Léna Rénove"
          priority
          width={391}
          height={465}
          decoding="async"
          className="mx-auto w-2/3"
          quality={90}
        />
        <p className="text-center lg:text-4xl text-2xl font-playfair text-primary">
          Ensemble, redonnonsdu style au durable !
        </p>
      </div>
      <div className="flex flex-row h-2/3 w-full">
        <Link className="w-1/2 h-full relative" href="/particulier">
          <Image
            src="/images/particulier.png"
            alt="Logo"
            width={723}
            className="h-full object-cover object-center w-full"
            height={348}
          />
          <span className="font-playfair flex flex-row items-baseline gap-2 text-white lg:text-4xl xl:text-5xl text-2xl absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
            Particulier
            <Image
              src="/images/arrow.png"
              alt="Logo"
              width={24}
              height={24}
              className="w-12"
            />
          </span>
        </Link>
        <Link className="w-1/2 relative h-full" href="/professionnel">
          <Image
            src="/images/pro.png"
            alt="Logo"
            width={723}
            height={348}
            className="h-full  object-cover object-center w-full"
          />
          <span className="font-playfair flex flex-row items-baseline gap-2 text-white lg:text-4xl xl:text-5xl text-2xl absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
            Professionnel
            <Image
              src="/images/arrow.png"
              alt="Logo"
              width={24}
              height={24}
              className="w-12"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
