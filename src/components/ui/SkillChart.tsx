import React from 'react';
import { motion } from 'framer-motion';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

interface SkillChartProps {
  data: Array<{
    category: string;
    value: number;
  }>;
}

export const SkillChart: React.FC<SkillChartProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="h-[400px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#8B5CF6" />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: '#8B5CF6' }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};