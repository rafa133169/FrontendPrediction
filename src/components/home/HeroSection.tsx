import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import FloatingElements from '../common/FloatingElements';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-[#00AFB9]/10 via-transparent to-[#F07167]/10"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#F07167] via-[#00AFB9] to-[#0081A7] bg-clip-text text-transparent">
              SOMA
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#0081A7] font-medium mb-4">
            Social Media & Outcomes Modeling Application
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre cómo las redes sociales impactan tu vida académica, personal y mental 
            a través de predicciones basadas en machine learning
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(240, 113, 103, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#F07167] to-[#FED9B7] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg flex items-center space-x-2"
          >
            <span>Comenzar Análisis</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#00AFB9] text-[#00AFB9] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00AFB9] hover:text-white transition-all"
          >
            Ver Demo
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center"
        >
          <ChevronDown className="w-8 h-8 text-[#00AFB9] animate-bounce" />
        </motion.div>
      </div>

      <FloatingElements />
    </section>
  );
};

export default HeroSection;