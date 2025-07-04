import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
      }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#FED9B7]/20 hover:border-[#F07167]/30 transition-all duration-300"
    >
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
        <feature.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-[#0081A7] mb-4">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
};

export default FeatureCard;