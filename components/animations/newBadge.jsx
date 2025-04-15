"use client";
import { motion } from "framer-motion";

const NewBadge = () => {
  const badgeVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: [0, 1.2, 1],
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-40% 0px -40% 0px",
      }}
      variants={badgeVariants}
      className="absolute z-10 top-0 left-0 bg-secondary text-white px-3 py-1 rounded-br-lg text-md font-medium shadow "
    >
      Nouveau
    </motion.span>
  );
};

export default NewBadge;
