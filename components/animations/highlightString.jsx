"use client";
import { motion } from "framer-motion";

const HighlightString = ({ children }) => {
  // Animation pour chaque lettre
  const letterVariants = {
    hidden: {
      color: "#45454f",
      fontWeight: "normal",
    },
    visible: {
      color: "#BF7144",
      fontWeight: "bold",
      transition: {
        color: { duration: 0.8 },
        fontWeight: { duration: 0.8 },
      },
    },
  };

  // Animation pour le conteneur avec décalage (stagger)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-30% 0px -50% 0px",
      }}
      className="inline-block"
    >
      {children.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default HighlightString;
