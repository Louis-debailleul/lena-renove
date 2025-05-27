import StarIcon from "@mui/icons-material/Star";
import Section from "./section";

const Reviews = () => {
  const prestation = [
    {
      name: "Olivier",
      content: "J'adore. Beau travail !!!! À très vite.",
    },
    {
      name: "John",
      content:
        "Merci encore pour votre professionnalisme et votre méticulosité, ils font merveille chez moi ! À très vite",
    },
    {
      name: "Camille",
      content:
        "Merci pour tout Léna, et pour ce travail bien fait et vite fait ! Bonne soirée et à bientôt.",
    },
  ];

  return (
    <Section className="bg-white">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">
          Merci pour vos retours
        </h2>
      </div>

      {/* Grille responsive */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {prestation.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 md:p-8 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
          >
            {/* Étoiles */}
            <div className="flex items-center gap-1 text-primary mb-4 md:mb-6">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 md:w-6 md:h-6" />
              ))}
            </div>

            {/* Contenu */}
            <blockquote className="text-base md:text-lg lg:text-xl text-secondary leading-relaxed mb-4 md:mb-6 italic flex-grow">
              "{item.content}"
            </blockquote>

            {/* Nom */}
            <cite className="text-right block text-base md:text-lg font-meddon text-secondary not-italic mt-auto">
              — {item.name}
            </cite>
          </div>
        ))}
      </div>

      {/* Version mobile avec scroll horizontal (fallback) */}
      <div className="lg:hidden mt-8">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
          {prestation.map((item, index) => (
            <div
              key={`mobile-${index}`}
              className="min-w-[300px] max-w-[360px] flex-shrink-0 snap-center bg-white p-6 rounded-sm shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-1 text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <blockquote className="text-base text-secondary leading-relaxed mb-4 italic flex-grow">
                <span className="text-primary font-bold">" </span>
                {item.content}
                <span className="text-primary font-bold"> "</span>
              </blockquote>
              <cite className="text-right block text-base font-meddon text-secondary not-italic mt-auto">
                — {item.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
