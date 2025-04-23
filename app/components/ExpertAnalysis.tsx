// app/components/ExpertAnalysis.tsx

import React from "react";
import { motion } from "framer-motion";

interface Props {
  quote: string;
  historian: string;
}

const ExpertAnalysis: React.FC<Props> = ({ quote, historian }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <blockquote className="text-lg italic font-serif text-gray-700 mb-4">
        "{quote}"
      </blockquote>
      <p className="text-sm text-gray-500 text-right">
        - {historian}
      </p>
    </motion.div>
  );
};

return ExpertAnalysis;