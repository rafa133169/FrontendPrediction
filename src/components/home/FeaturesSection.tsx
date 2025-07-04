import { motion } from 'framer-motion';
import { FEATURES } from '../../utils/constants';
import FeatureCard from '../ui/FeatureCard';

const FeaturesSection = () => {
  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F07167] to-[#0081A7] bg-clip-text text-transparent">
            Características Principales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Análisis profundo de patrones de uso en redes sociales y su impacto en diferentes aspectos de tu vida
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;