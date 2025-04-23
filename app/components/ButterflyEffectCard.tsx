// app/components/ButterflyEffectCard.tsx

import React from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
}

const ButterflyEffectCard: React.FC<Props> = ({ title, description }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

return ButterflyEffectCard;