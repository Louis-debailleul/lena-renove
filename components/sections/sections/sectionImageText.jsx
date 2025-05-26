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
    className={`px-0 md:px-0 md:py-0 py-0 ${bgColor ? bgColor : ""}`}
    childClassName={`flex flex-col ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    }  ${textColor ? textColor : ""} ${bgColor ? bgColor : ""}`}
  >
    <div className="px-4 md:px-6 flex lg:w-1/2 flex-col justify-center lg:justify-start py-12 md:py-16">
      <h2 className="text-4xl mb-4">{title}</h2>
      <p className="text-xl sm:text-2xl/10 max-w-prose">{text}</p>
    </div>
    <div className="flex lg:w-1/2 items-center justify-center">
      <img />
      <Image
        src={image}
        alt={title}
        width={720}
        height={480}
        className="w-full h-full object-cover"
      />
    </div>
  </Section>
);

export default SectionImageText;
