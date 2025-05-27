import { motion } from "framer-motion";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const StepBar = ({ currentStep }) => {
  const steps = [
    { number: 1, title: "Informations générales", icon: PersonIcon },
    { number: 2, title: "Détails du projet", icon: HomeIcon },
    { number: 3, title: "Planification et contact", icon: CalendarTodayIcon },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-stretch relative">
        {/* Ligne de progression en arrière-plan */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 rounded-full -z-10">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="flex flex-col items-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Cercle de l'étape */}
            <motion.div
              className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full font-semibold text-lg md:text-xl transition-all duration-300 shadow-lg ${
                currentStep >= step.number
                  ? "bg-primary text-white shadow-primary/30"
                  : "bg-white text-gray-400 border-2 border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentStep > step.number ? (
                <motion.svg
                  className="w-6 h-6 md:w-7 md:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              ) : currentStep === step.number ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <step.icon className="w-6 h-6 md:w-7 md:h-7" />
                </motion.span>
              ) : (
                step.number
              )}
            </motion.div>

            {/* Titre de l'étape */}
            <motion.div
              className="mt-3 text-center max-w-[120px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <span
                className={`text-xs md:text-sm font-medium leading-tight transition-colors duration-300 ${
                  currentStep >= step.number ? "text-primary" : "text-gray-500"
                }`}
              >
                {step.title}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Indicateur de progression textuel */}
      <motion.div
        className="text-center mt-6 md:mt-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
          <span className="text-primary text-sm md:text-base font-medium">
            Étape {currentStep} sur {steps.length}
          </span>
          <div className="flex gap-1">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index < currentStep ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StepBar;
