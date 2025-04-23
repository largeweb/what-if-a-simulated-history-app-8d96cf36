// app/components/Timeline.tsx
"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface TimelineEvent {
  year: number;
  event: string;
}

interface Props {
  timelineData: TimelineEvent[];
  onTimelineChange: (year: number) => void;
}

const Timeline: React.FC<Props> = ({ timelineData, onTimelineChange }) => {
  const [selectedYear, setSelectedYear] = useState<number>(timelineData[0].year);

  const handleEventClick = useCallback((year: number) => {
    setSelectedYear(year);
    onTimelineChange(year);
  }, [onTimelineChange]);

  return (
    <div className="relative overflow-x-auto">
      <motion.div
        className="flex space-x-8 py-4"
        style={{ width: `${timelineData.length * 200}px` }} // Adjust width as needed
      >
        {timelineData.map((item) => (
          <motion.div
            key={item.year}
            className={`flex-shrink-0 w-48 text-center cursor-pointer ${
              selectedYear === item.year
                ? "text-blue-500 font-bold"
                : "text-gray-700"
            }`}
            onClick={() => handleEventClick(item.year)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-sm">{item.year}</div>
            <div className="text-base">{item.event}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;