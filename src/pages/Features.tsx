import { motion } from 'framer-motion';
import { FEATURES } from '../utils/constants';
import FeatureCard from '../components/ui/FeatureCard';
import { Brain, TrendingUp, Shield, Users, Clock, Heart } from 'lucide-react';

const Features = () => {
  const handleStartAnalysis = () => {
    window.location.href = '/prediction';
  };

  const detailedFeatures = [
    {
      icon: Brain,
      title: "Análisis de Adicción Avanzado",
      description: "Utilizamos algoritmos de machine learning para evaluar patrones de uso problemático en redes sociales. Nuestro sistema analiza frecuencia de uso, tiempo de pantalla, y comportamientos compulsivos para generar un score de adicción personalizado.",
      color: "from-[#F07167] to-[#FED9B7]",
      metrics: ["Precisión: 94%", "Tiempo de análisis: 2 min", "Datos procesados: 50+ variables"]
    },
    {
      icon: TrendingUp,
      title: "Impacto Académico Detallado",
      description: "Predecimos cómo el uso de redes sociales afecta tu rendimiento académico mediante análisis de correlación entre tiempo de uso, horarios de estudio y calificaciones históricas.",
      color: "from-[#00AFB9] to-[#0081A7]",
      metrics: ["Correlación: 0.87", "Predicción: 90% exactitud", "Factores analizados: 30+"]
    },
    {
      icon: Users,
      title: "Dinámicas Sociales",
      description: "Examina el impacto en relaciones interpersonales, conflictos generados por uso excesivo, y patrones de comunicación digital vs. presencial.",
      color: "from-[#0081A7] to-[#00AFB9]",
      metrics: ["Relaciones analizadas: 15+", "Conflictos detectados: 8 tipos", "Satisfacción social: Score 1-10"]
    },
    {
      icon: Heart,
      title: "Bienestar Mental Integral",
      description: "Evaluamos la correlación entre uso de redes sociales y indicadores de salud mental como ansiedad, depresión, autoestima y bienestar general.",
      color: "from-[#FED9B7] to-[#F07167]",
      metrics: ["Indicadores: 12 métricas", "Precisión: 91%", "Intervención temprana: Sí"]
    },
    {
      icon: Clock,
      title: "Calidad del Sueño",
      description: "Analizamos cómo el uso nocturno de dispositivos y la exposición a luz azul afectan tus patrones de sueño y calidad de descanso.",
      color: "from-[#F07167] to-[#0081A7]",
      metrics: ["Horas monitoreadas: 24/7", "Calidad medida: 5 parámetros", "Mejora promedio: 23%"]
    },
    {
      icon: Shield,
      title: "Protección de Datos",
      description: "Todos los análisis se realizan con máxima seguridad y privacidad. Tus datos están encriptados y nunca se comparten con terceros.",
      color: "from-[#00AFB9] to-[#FED9B7]",
      metrics: ["Encriptación: AES-256", "Privacidad: 100%", "Cumplimiento: GDPR"]
    }
  ];

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#F07167]/10 to-[#0081A7]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#F07167] to-[#0081A7] bg-clip-text text-transparent">
              Características Avanzadas
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Descubre todas las capacidades de SOMA para analizar el impacto de las redes sociales 
              en tu vida académica, personal y mental con precisión científica
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#FED9B7]/20 hover:border-[#F07167]/30 transition-all duration-300"
              >
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0081A7] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-[#F07167] mb-3">Métricas Clave:</h4>
                  {feature.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#F07167] to-[#00AFB9] rounded-full"></div>
                      <span className="text-sm text-gray-600">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Features Grid */}
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
              Funcionalidades Principales
            </h2>
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
              ¿Listo para el análisis completo?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experimenta todas estas características en acción y descubre insights únicos sobre tu relación con las redes sociales
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStartAnalysis}
              className="bg-white text-[#F07167] px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#FDFCDC] transition-all"
            >
              Comenzar Análisis Gratuito
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;