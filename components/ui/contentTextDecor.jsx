import Image from "next/image";
export default function ContentTextDecor({ children, className }) {
  return (
    <div className={`${className} flex items-center justify-center w-full`}>
      <div className="w-1/12">
        <Image
          src="/images/pointLeft.png"
          alt="Rouleau de peinture"
          priority
          width={50}
          height={17}
          decoding="async"
          className="max-w-10 mx-auto"
        />
      </div>
      <p className="w-10/12">{children}</p>
      <div className="w-1/12">
        <Image
          src="/images/pointRight.png"
          alt="Rouleau de peinture"
          priority
          width={50}
          height={17}
          decoding="async"
          className="max-w-10 mx-auto"
        />
      </div>
    </div>
  );
}
