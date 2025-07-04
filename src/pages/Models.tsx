import { motion } from 'framer-motion';
import { MODELS } from '../utils/constants';
import { Zap, BarChart3, Brain, Target, TrendingUp, Activity, Database } from 'lucide-react';

const Models = () => {
  const modelDetails = [
    {
      name: "Predicción de Nivel de Adicción",
      type: "Regresión",
      algorithm: "Random Forest",
      description: "Modelo avanzado que evalúa el nivel de adicción basado en patrones de uso, frecuencia de acceso, y comportamientos compulsivos.",
      accuracy: "94.2%",
      features: ["Tiempo de uso diario", "Frecuencia de acceso", "Uso nocturno", "Comportamientos compulsivos"],
      icon: Brain,
      color: "from-[#F07167] to-[#FED9B7]"
    },
    {
      name: "Impacto en Rendimiento Académico",
      type: "Clasificación Binaria",
      algorithm: "Logistic Regression",
      description: "Predice si el uso de redes sociales tiene un impacto negativo en el rendimiento académico del usuario.",
      accuracy: "89.7%",
      features: ["Horas de estudio", "Calificaciones históricas", "Uso durante clases", "Procrastinación"],
      icon: TrendingUp,
      color: "from-[#00AFB9] to-[#0081A7]"
    },
    {
      name: "Plataforma Más Usada",
      type: "Clasificación Multiclase",
      algorithm: "Random Forest",
      description: "Identifica qué plataforma de redes sociales domina el tiempo del usuario y sus patrones específicos.",
      accuracy: "96.1%",
      features: ["Tiempo por plataforma", "Tipo de contenido", "Interacciones", "Preferencias"],
      icon: BarChart3,
      color: "from-[#0081A7] to-[#00AFB9]"
    },
    {
      name: "Estado de Relación Sentimental",
      type: "Clasificación Multiclase",
      algorithm: "Decision Tree",
      description: "Analiza cómo el uso de redes sociales se correlaciona con el estado de relación y satisfacción sentimental.",
      accuracy: "87.3%",
      features: ["Actividad en pareja", "Celos digitales", "Tiempo compartido", "Conflictos relacionados"],
      icon: Target,
      color: "from-[#FED9B7] to-[#F07167]"
    },
    {
      name: "Predicción de Salud Mental",
      type: "Regresión",
      algorithm: "Gradient Boosting",
      description: "Evalúa el impacto del uso de redes sociales en indicadores de salud mental como ansiedad y depresión.",
      accuracy: "91.8%",
      features: ["Comparación social", "Autoestima", "Ansiedad", "Estado de ánimo"],
      icon: Activity,
      color: "from-[#F07167] to-[#0081A7]"
    },
    {
      name: "Predicción de Horas de Sueño",
      type: "Regresión",
      algorithm: "Linear Regression",
      description: "Predice la calidad y cantidad de sueño basado en patrones de uso nocturno de dispositivos.",
      accuracy: "88.5%",
      features: ["Uso nocturno", "Luz azul", "Hora de dormir", "Calidad del sueño"],
      icon: Database,
      color: "from-[#00AFB9] to-[#FED9B7]"
    }
  ];

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0081A7]/10 to-[#F07167]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0081A7] to-[#F07167] bg-clip-text text-transparent">
              Modelos de IA
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Conoce los algoritmos de machine learning que potencian SOMA, entrenados con datos 
              de miles de usuarios para ofrecerte predicciones precisas y personalizadas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Model Details */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {modelDetails.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#FED9B7]/20 hover:border-[#F07167]/30 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${model.color} flex items-center justify-center`}>
                        <model.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#0081A7] mb-2">{model.name}</h3>
                        <div className="flex space-x-3">
                          <span className="px-3 py-1 bg-gradient-to-r from-[#F07167] to-[#FED9B7] text-white rounded-full text-sm font-medium">
                            {model.type}
                          </span>
                          <span className="px-3 py-1 bg-gradient-to-r from-[#00AFB9] to-[#0081A7] text-white rounded-full text-sm font-medium">
                            {model.algorithm}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">{model.description}</p>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-[#F07167]" />
                        <span className="font-semibold text-[#0081A7]">Precisión: {model.accuracy}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#F07167]/5 to-[#0081A7]/5 rounded-2xl p-6">
                    <h4 className="font-bold text-[#0081A7] mb-4">Variables Analizadas:</h4>
                    <div className="space-y-3">
                      {model.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-[#F07167] to-[#00AFB9] rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Models Overview */}
      <section className="py-20 bg-gradient-to-br from-[#0081A7]/5 to-[#F07167]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F07167] to-[#0081A7] bg-clip-text text-transparent">
              Resumen de Modelos
            </h2>
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

      {/* CTA Section */}
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
              Experimenta la IA en acción
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Pon a prueba todos estos modelos con tus propios datos y obtén insights únicos sobre tu relación con las redes sociales
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#F07167] px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#FDFCDC] transition-all"
            >
              Probar Modelos Ahora
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Models;