import StarIcon from "@mui/icons-material/Star";
import Section from "./section";

const Reviews = () => {
  const prestation = [
    {
      name: "Olivier",
      content: "J'adore. Beau travail !!!! A très vite.",
    },
    {
      name: "John",
      content:
        "Merci encore pour votre professionnalisme et votre méticulosité, ils font merveille chez moi! A très vite",
    },
    {
      name: "Camille",
      content:
        "Merci pour tout Lena, et pour ce travail bien fait et vite fait ! Bonne soirée et à bientôt.",
    },
  ];
  return (
    <Section className="pl-6 pr-0 bg-white">
      <h2 className="text-primary text-4xl mb-12">MERCI POUR VOS RETOURS</h2>
      <div className="flex flex-row gap-4  lg:gap-6 pb-12 overflow-x-auto snap-x snap-mandatory   lg:overflow-visible">
        {prestation.map((item, index) => (
          <div className="min-w-80 max-w-md mx-auto w-1/3 px-4 lg:px-6">
            <div className="flex items-center gap-2 text-primary mb-4">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p className="text-lg md:text-xl xl:text-xl mb-0 text-secondary">
              “{item.content}”
            </p>
            <p className="text-end text-lg font-meddon text-secondary self-end">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Reviews;
