import { motion } from "framer-motion";

export default function ExperienceCard({ img, title }) {
  return (
    <motion.div
      whileHover={{ opacity: [0, 1] }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
        staggerChildren: 0.5,
      }}
      className="flex flex-col gap-4 items-center justify-center py-10 bg-white rounded-lg shadow dark:bg-gray-800 relative z-20"
    >
      <img src={img} alt={title} className="w-13 h-8" />
      <p class="font-normal text-gray-400 dark:text-gray-200">{title}</p>
    </motion.div>
  );
}
