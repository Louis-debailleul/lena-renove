import Image from "next/image";
import Section from "./section";

const SectionImageText = ({
  title,
  text,
  image,
  reverse,
  bgColor,
  textColor,
}) => (
  <Section
    className={`px-0 md:px-0 py-0 md:py-0 lg:py-0 ${bgColor ? bgColor : ""}`}
    childClassName={`flex flex-col ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } ${textColor ? textColor : ""} ${
      bgColor ? bgColor : ""
    } min-h-[500px] md:min-h-[600px]`}
  >
    <div className="px-6 md:px-8 lg:px-12 xl:px-16 flex lg:w-1/2 flex-col justify-center py-12 md:py-16 lg:py-20">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-playfair mb-6 md:mb-8 leading-tight">
        {title}
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl max-w-prose leading-relaxed">
        {text}
      </p>
    </div>
    <div className="flex lg:w-1/2 items-center justify-center relative  min-h-full">
      <Image
        src={image}
        alt={title}
        width={720}
        height={480}
        className="w-full h-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
      />
    </div>
  </Section>
);

export default SectionImageText;
