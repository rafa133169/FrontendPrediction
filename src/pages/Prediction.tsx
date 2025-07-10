import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Calculator, TrendingUp, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

interface PredictionFormData {
  edad: number | '';
  genero: string;
  nivelAcademico: string;
  pais: string;
  usoDialioHoras: number | '';
  plataformaMasUsada: string;
  afectaRendimientoAcademico: string;
  horasSuenoPorNoche: number | '';
  estadoSentimental: string;
  conflictosPorRedesSociales: string;
}

interface FormErrors {
  edad?: string;
  genero?: string;
  nivelAcademico?: string;
  pais?: string;
  usoDialioHoras?: string;
  plataformaMasUsada?: string;
  afectaRendimientoAcademico?: string;
  horasSuenoPorNoche?: string;
  estadoSentimental?: string;
  conflictosPorRedesSociales?: string;
}

interface PredictionResults {
  nivelAdiccion: number;
  impactoAcademico: string;
  plataformaDominante: string;
  saludMental: number;
  recomendaciones: string[];
}

interface SavedData {
  formData: PredictionFormData;
  results: PredictionResults;
}


const Prediction: React.FC = () => {
  const [formData, setFormData] = useState<PredictionFormData>({
    edad: '',
    genero: '',
    nivelAcademico: '',
    pais: '',
    usoDialioHoras: '',
    plataformaMasUsada: '',
    afectaRendimientoAcademico: '',
    horasSuenoPorNoche: '',
    estadoSentimental: '',
    conflictosPorRedesSociales: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [results, setResults] = useState<PredictionResults | null>(null);

  const paises = [
    'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 
    'Ecuador', 'El Salvador', 'España', 'Estados Unidos', 'Guatemala', 'Honduras', 
    'México', 'Nicaragua', 'Panamá', 'Paraguay', 'Perú', 'Puerto Rico', 
    'República Dominicana', 'Uruguay', 'Venezuela'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.edad) {
      newErrors.edad = 'La edad es requerida';
    } else if (formData.edad < 13 || formData.edad > 100) {
      newErrors.edad = 'La edad debe estar entre 13 y 100 años';
    }

    if (!formData.genero) {
      newErrors.genero = 'El género es requerido';
    }

    if (!formData.nivelAcademico) {
      newErrors.nivelAcademico = 'El nivel académico es requerido';
    }

    if (!formData.pais) {
      newErrors.pais = 'El país es requerido';
    }

    if (!formData.usoDialioHoras) {
      newErrors.usoDialioHoras = 'Las horas de uso diario son requeridas';
    } else if (formData.usoDialioHoras < 0 || formData.usoDialioHoras > 24) {
      newErrors.usoDialioHoras = 'Las horas deben estar entre 0 y 24';
    }

    if (!formData.plataformaMasUsada) {
      newErrors.plataformaMasUsada = 'La plataforma más usada es requerida';
    }

    if (!formData.afectaRendimientoAcademico) {
      newErrors.afectaRendimientoAcademico = 'Este campo es requerido';
    }

    if (!formData.horasSuenoPorNoche) {
      newErrors.horasSuenoPorNoche = 'Las horas de sueño son requeridas';
    } else if (formData.horasSuenoPorNoche < 0 || formData.horasSuenoPorNoche > 24) {
      newErrors.horasSuenoPorNoche = 'Las horas deben estar entre 0 y 24';
    }

    if (!formData.estadoSentimental) {
      newErrors.estadoSentimental = 'El estado sentimental es requerido';
    }

    if (!formData.conflictosPorRedesSociales) {
      newErrors.conflictosPorRedesSociales = 'Este campo es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:8000/formulario/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error en la respuesta del servidor');
      }

      const data = await response.json();

      // Guardar los resultados en el estado
      setResults(data);

      // Guardar los datos del formulario y resultados en localStorage
      const dataToSave: SavedData = {
        formData: formData,
        results: data
      };
      localStorage.setItem('predictionData', JSON.stringify(dataToSave));
      window.location.href = '/dashboard';

    } catch (error) {
      console.error('Error enviando formulario:', error);
      // Puedes mostrar algún mensaje de error bonito aquí
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'edad' || name === 'usoDialioHoras' || name === 'horasSuenoPorNoche' 
        ? (value === '' ? '' : Number(value))
        : value 
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const resetForm = () => {
    setFormData({
      edad: '',
      genero: '',
      nivelAcademico: '',
      pais: '',
      usoDialioHoras: '',
      plataformaMasUsada: '',
      afectaRendimientoAcademico: '',
      horasSuenoPorNoche: '',
      estadoSentimental: '',
      conflictosPorRedesSociales: ''
    });
    setResults(null);
    setErrors({});
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#F07167] to-[#00AFB9] rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#F07167] to-[#0081A7] bg-clip-text text-transparent">
            Predicción SOMA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Completa el formulario para obtener un análisis personalizado de tu relación con las redes sociales
          </p>
        </motion.div>

        {!results ? (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#FED9B7]/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Edad */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0081A7] mb-2">
                    Edad *
                  </label>
                  <input
                    type="number"
                    name="edad"
                    value={formData.edad}
                    onChange={handleChange}
                    min="13"
                    max="100"
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#F07167] transition-all ${
                      errors.edad ? 'border-red-300' : 'border-gray-200'
                    }`}
                    placeholder="Ingresa tu edad"
                  />
                  {errors.edad && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.edad}
                    </p>
                  )}
                </div>

                {/* Género */}
                <div>
                  <label className="block text-sm font-medium text-[#0081A7] mb-2">
                    Género *
                  </label>
                  <select
                    name="genero"
                    value={formData.genero}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#F07167] transition-all ${
                      errors.genero ? 'border-red-300' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Selecciona</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                  {errors.genero && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.genero}
                    </p>
                  )}
                </div>
              </div>

              {/* Nivel Académico */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0081A7] mb-2">
                    Nivel académico *
                  </label>
                  <select
                    name="nivelAcademico"
                    value={formData.nivelAcademico}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#F07167] transition-all ${
                      errors.nivelAcademico ? 'border-red-300' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Selecciona</option>
                    <option value="Graduate">Graduate</option>
                    <option value="High School">High School</option>
                    <option value="Undergraduate">Undergraduate</option>
                  </select>
                  {errors.nivelAcademico && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.nivelAcademico}
                    </p>
                  )}
                </div>

                {/* País */}
                <div>
                  <label className="block text-sm font-medium text-[#0081A7] mb-2">
                    País *
                  </label>
                  <select
                    name="pais"
                    value={formData.pais}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#F07167] transition-all ${
                      errors.pais ? 'border-red-300' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Selecciona</option>
                    {paises.map(pais => (
                      <option key={pais} value={pais}>{pais}</option>
                    ))}
                  </select>
                  {errors.pais && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.pais}
                    </p>
                  )}
                </div>
              </div>

              {/* Uso diario y Plataforma */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0081A7] mb-2">
                    Uso diario (horas) *
                  </label>
                  <input
                    type="number"
                    name="usoDialioHoras"
                    value={formData.usoDialioHoras}
                    onChange={handleChange}
                    min="0"
                    max="24"
                    step="0.5"
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#F07167] transition-all ${
                      errors.usoDialioHoras ? 'border-red-300' : 'border-gray-200'
                    }`}
                    placeholder="Ej: 3.5"
                  />
                  {errors.usoDialioHoras && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.usoDialioHoras}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0081A7] mb-2">
                    Plataforma más usada *
                  </label>
                  <select
                    name="plataformaMasUsada"
                    value={formData.plataformaMasUsada}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#F07167] transition-all ${
                      errors.plataformaMasUsada ? 'border-red-300' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Selecciona</option>
                    <option value="Facebook">Facebook</option>
                    <option value="TikTok">TikTok</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Whatsapp">Whatsapp</option>
                    <option value="X (Twitter)">X (Twitter)</option>
                    <option value="Telegram">Telegram</option>
                    <option value="Snapchat">Snapchat</option>
                    <option value="Linkedin">Linkedin</option>
                    <option value="Snapchat">Snapchat</option>

                  </select>
                  {errors.plataformaMasUsada && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.plataformaMasUsada}
                    </p>
                  )}
                </div>
              </div>

              {/* Afecta rendimiento académico */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0081A7] mb-2">
                    Afecta rendimiento académico *
                  </label>
                  <select
                    name="afectaRendimientoAcademico"
                    value={formData.afectaRendimientoAcademico}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#F07167] transition-all ${
                      errors.afectaRendimientoAcademico ? 'border-red-300' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Selecciona</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                  {errors.afectaRendimientoAcademico && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.afectaRendimientoAcademico}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0081A7] mb-2">
                    Horas de sueño por noche *
                  </label>
                  <input
                    type="number"
                    name="horasSuenoPorNoche"
                    value={formData.horasSuenoPorNoche}
                    onChange={handleChange}
                    min="0"
                    max="24"
                    step="0.5"
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#F07167] transition-all ${
                      errors.horasSuenoPorNoche ? 'border-red-300' : 'border-gray-200'
                    }`}
                    placeholder="Ej: 7.5"
                  />
                  {errors.horasSuenoPorNoche && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.horasSuenoPorNoche}
                    </p>
                  )}
                </div>
              </div>

              {/* Estado sentimental y Conflictos */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#0081A7] mb-2">
                    Estado sentimental *
                  </label>
                  <select
                    name="estadoSentimental"
                    value={formData.estadoSentimental}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#F07167] transition-all ${
                      errors.estadoSentimental ? 'border-red-300' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Selecciona</option>
                    <option value="En una relación">En una relación</option>
                    <option value="Soltero(a)">Soltero(a)</option>
                    <option value="Es complicado">Es complicado</option>
                  </select>
                  {errors.estadoSentimental && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.estadoSentimental}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0081A7] mb-2">
                    Conflictos por redes sociales *
                  </label>
                  <select
                    name="conflictosPorRedesSociales"
                    value={formData.conflictosPorRedesSociales}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-[#F07167] transition-all ${
                      errors.conflictosPorRedesSociales ? 'border-red-300' : 'border-gray-200'
                    }`}
                  >
                    <option value="">Selecciona</option>
                    <option value="Sí">Sí</option>
                    <option value="No">No</option>
                  </select>
                  {errors.conflictosPorRedesSociales && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.conflictosPorRedesSociales}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={Calculator}
                loading={isSubmitting}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Analizando...' : 'Generar Predicción'}
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Resultados */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#FED9B7]/20">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-[#0081A7]">Resultados de tu Predicción</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#F07167] to-[#FED9B7] p-6 rounded-xl text-white">
                  <TrendingUp className="w-8 h-8 mb-4" />
                  <h3 className="font-semibold mb-2">Nivel de Adicción</h3>
                  <p className="text-3xl font-bold">{results.nivelAdiccion}</p>
                </div>

                <div className="bg-gradient-to-br from-[#00AFB9] to-[#0081A7] p-6 rounded-xl text-white">
                  <Brain className="w-8 h-8 mb-4" />
                  <h3 className="font-semibold mb-2">Salud Mental</h3>
                  <p className="text-3xl font-bold">{results.saludMental}/10</p>
                </div>

                <div className="bg-gradient-to-br from-[#0081A7] to-[#00AFB9] p-6 rounded-xl text-white">
                  <Calculator className="w-8 h-8 mb-4" />
                  <h3 className="font-semibold mb-2">Impacto Académico</h3>
                  <p className="text-2xl font-bold">{results.impactoAcademico}</p>
                </div>

                <div className="bg-gradient-to-br from-[#FED9B7] to-[#F07167] p-6 rounded-xl text-white">
                  <TrendingUp className="w-8 h-8 mb-4" />
                  <h3 className="font-semibold mb-2">Plataforma Dominante</h3>
                  <p className="text-xl font-bold">{results.plataformaDominante}</p>
                </div>
              </div>

              {/* Recomendaciones */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#0081A7] mb-4">Recomendaciones Personalizadas</h3>
                <ul className="space-y-2">
                  {results.recomendaciones.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-[#00AFB9] mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={resetForm}
                variant="outline"
                size="lg"
              >
                Realizar Nueva Predicción
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Prediction;