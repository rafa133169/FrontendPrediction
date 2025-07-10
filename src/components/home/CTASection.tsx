import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const handleStartNow = () => {
    window.location.href = '/prediction';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F07167] to-[#0081A7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para conocer tu perfil digital?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubre cómo las redes sociales impactan tu vida y obtén insights personalizados 
            para mejorar tu bienestar digital
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartNow}
            className="bg-white text-[#F07167] px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#FDFCDC] transition-all flex items-center space-x-2 mx-auto"
          >
            <span>Comenzar Ahora</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;