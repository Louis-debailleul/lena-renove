import Image from "next/image";

export default function ImgContent({ children, imgName, className }) {
  return (
    <div className={`w-full mx-auto relative ${className}`}>
      {/* Image en arrière-plan */}
      <div className="absolute w-full h-full z-0">
        <Image
          src={`/images/${imgName}`}
          alt="Rouleau de peinture"
          fill
          className="object-cover object-center rounded-3xl"
          priority
        />
      </div>

      {/* Contenu au-dessus de l'image */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto h-full p-6 flex items-center">
        {children}
      </div>
    </div>
  );
  s;
}
