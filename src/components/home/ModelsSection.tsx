import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { MODELS } from '../../utils/constants';

const ModelsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0081A7]/5 to-[#F07167]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0081A7] to-[#F07167] bg-clip-text text-transparent">
            Modelos de Machine Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Algoritmos avanzados entrenados con datos de estudiantes de todo el mundo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {MODELS.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#FED9B7]/20 hover:border-[#00AFB9]/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0081A7] mb-2">{model.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#F07167] to-[#FED9B7] text-white rounded-full text-sm font-medium">
                      {model.type}
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-[#00AFB9] to-[#0081A7] text-white rounded-full text-sm font-medium">
                      {model.algorithm}
                    </span>
                  </div>
                </div>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 bg-gradient-to-br from-[#F07167] to-[#00AFB9] rounded-full"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModelsSection;