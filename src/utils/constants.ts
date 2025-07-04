import { Brain, BarChart3, Users, Smartphone, Clock, Heart } from 'lucide-react';

export const FEATURES = [
  {
    icon: Brain,
    title: "Predicción de Adicción",
    description: "Evalúa el nivel de adicción a redes sociales usando algoritmos avanzados",
    color: "from-[#F07167] to-[#FED9B7]"
  },
  {
    icon: BarChart3,
    title: "Impacto Académico",
    description: "Predice cómo las redes sociales afectan tu rendimiento académico",
    color: "from-[#00AFB9] to-[#0081A7]"
  },
  {
    icon: Users,
    title: "Análisis de Relaciones",
    description: "Examina el impacto en tus relaciones personales y conflictos",
    color: "from-[#0081A7] to-[#00AFB9]"
  },
  {
    icon: Heart,
    title: "Salud Mental",
    description: "Evalúa la correlación entre uso de redes y bienestar mental",
    color: "from-[#FED9B7] to-[#F07167]"
  },
  {
    icon: Clock,
    title: "Patrones de Sueño",
    description: "Analiza cómo el uso digital afecta tu calidad de sueño",
    color: "from-[#F07167] to-[#0081A7]"
  },
  {
    icon: Smartphone,
    title: "Uso por Plataforma",
    description: "Identifica qué plataformas dominas y sus efectos específicos",
    color: "from-[#00AFB9] to-[#FED9B7]"
  }
];

export const MODELS = [
  { name: "Predicción de Nivel de Adicción", type: "Regresión", algorithm: "Random Forest" },
  { name: "Impacto en Rendimiento Académico", type: "Clasificación Binaria", algorithm: "Logistic Regression" },
  { name: "Plataforma Más Usada", type: "Clasificación Multiclase", algorithm: "Random Forest" },
  { name: "Estado de Relación Sentimental", type: "Clasificación Multiclase", algorithm: "Decision Tree" },
  { name: "Predicción de Salud Mental", type: "Regresión", algorithm: "Gradient Boosting" },
  { name: "Predicción de Horas de Sueño", type: "Regresión", algorithm: "Linear Regression" },
  { name: "Conflictos por Redes Sociales", type: "Regresión", algorithm: "XGBoost" }
];

export const NAVIGATION_ITEMS = [
  { name: 'Inicio', path: '/' },
  { name: 'Características', path: '/features' },
  { name: 'Modelos', path: '/models' },
  { name: 'Contacto', path: '/contact' },
  { name: 'Predicion', path: '/prediction' }
];