// app/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Timeline from "./components/Timeline";
import ButterflyEffectCard from "./components/ButterflyEffectCard";
import ExpertAnalysis from "./components/ExpertAnalysis";

// Mock Data
const mockTimelineData = [
  { year: 1914, event: "Archduke Franz Ferdinand Lives" },
  { year: 1917, event: "No Russian Revolution" },
  { year: 1929, event: "Stable Global Economy" },
  { year: 1939, event: "The British Empire Thrives" },
  { year: 1950, event: "The European Union is Never Founded" },
  { year: 1962, event: "The Cold War Ends Peacefully" },
];

const mockButterflyEffectData = [
  {
    year: 1914,
    title: "No World War I",
    description:
      "The absence of the assassination means no large-scale European conflict. The old empires remain, and the world avoids the devastating losses of WWI.",
  },
  {
    year: 1917,
    title: "Tsarist Russia Remains",
    description:
      "Without the war to spark revolution, the Tsarist regime continues its rule, albeit with possible reforms to quell unrest. A constitutional monarchy is possible!",
  },
  {
    year: 1929,
    title: "Global Economy Stays Strong",
    description:
      "The absence of WWI's economic disruption leads to a more stable global market. The Great Depression is avoided, fostering greater prosperity.",
  },
  {
    year: 1939,
    title: "British Empire Endures",
    description:
      "The British Empire, spared the financial strain of WWI, retains its global influence and territories for longer.",
  },
  {
    year: 1950,
    title: "No United Europe",
    description: "The seeds of European integration aren't sown without World War 2, the EU is never founded, leading to a fragmented continent.",
  },
    {
    year: 1962,
    title: "Peaceful Cold War",
    description: "Without huge world wars, the Cold war tensions de-escalate leading to a much more peaceful end to the nuclear stand off.",
  },
];

const mockExpertAnalysisData = [
  {
    year: 1914,
    quote:
      "The ripple effects of this single event are immeasurable. Europe avoided a century of conflict.",
    historian: "Dr. Eleanor Vance",
  },
    {
    year: 1917,
    quote:
      "Russia's development would be vastly different. No Soviet state means a different geopolitical landscape.",
    historian: "Dr. Dimitri Volkov",
  },
  {
    year: 1929,
    quote:
      "The lack of global economic destruction set the stage for an economic boom."
    ,
    historian: "Professor Anya Sharma",
  },
    {
    year: 1939,
    quote:
      "The sun never set on the British Empire, it remains a powerful force in the world.",
    historian: "Professor Charles Weatherly",
  },
      {
    year: 1950,
    quote:
      "Without large scale conflict, the European nations remain independent, a collection of soverign states.",
    historian: "Professor Francois Dubois",
  },
    {
    year: 1962,
    quote:
      "Without huge proxy wars of the 20th century the cold war fizzled out leaving a new era of global stability.",
    historian: "General Thomas Andrews",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

return function Home() {
  const [currentYear, setCurrentYear] = useState(1914);

  const handleTimelineChange = (year: number) => {
    setCurrentYear(year);
  };

  const currentButterflyEffect = mockButterflyEffectData.find(
    (effect) => effect.year === currentYear
  );

  const currentAnalysis = mockExpertAnalysisData.find(
    (analysis) => analysis.year === currentYear
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What If... The Shot That Wasn't Heard
        </motion.h1>

        <Timeline
          timelineData={mockTimelineData}
          onTimelineChange={handleTimelineChange}
        />

        <div className="flex flex-col md:flex-row lg:flex-row gap-4 mt-8">
          <motion.div
            className="w-full md:w-1/2 lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentButterflyEffect && (
              <ButterflyEffectCard
                title={currentButterflyEffect.title}
                description={currentButterflyEffect.description}
              />
            )}
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 lg:w-1/3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {currentAnalysis && (
              <ExpertAnalysis
                quote={currentAnalysis.quote}
                historian={currentAnalysis.historian}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}