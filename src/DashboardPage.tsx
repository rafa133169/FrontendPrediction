import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line } from 'recharts';
import { User, Brain, Clock, Globe, Heart, GraduationCap, Smartphone, TrendingUp, AlertTriangle, CheckCircle, BarChart3, PieChartIcon, Activity, Users } from 'lucide-react';

interface FormData {
  edad: number;
  genero: string;
  nivelAcademico: string;
  pais: string;
  usoDialioHoras: number;
  plataformaMasUsada: string;
  afectaRendimientoAcademico: string;
  horasSuenoPorNoche: number;
  estadoSentimental: string;
  conflictosPorRedesSociales: string;
}

interface Results {
  nivelAdiccion: number;
  saludMental: number;
  impactoAcademico: string;
  plataformaDominante: string;
  recomendaciones: string[];
  predictions: {
    pred1: number;
    pred2: number;
    pred3: number;
    pred4: number;
    pred5: number;
    pred6: number;
    pred7: number;
    pred8: number;
  };
}

interface StoredData {
  formData: FormData;
  results: Results;
}

const Dashboard: React.FC = () => {
  const [activeView, setActiveView] = useState('overview');
  const [storedData, setStoredData] = useState<StoredData | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const savedData = localStorage.getItem('predictionData');
    
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData) as StoredData;
        setStoredData(parsedData);
      } catch (error) {
        console.error('Error al parsear datos del localStorage:', error);
        // Datos por defecto en caso de error
        setStoredData({
          formData: {
            edad: 23,
            genero: "Masculino",
            nivelAcademico: "Graduate",
            pais: "Argentina",
            usoDialioHoras: 3,
            plataformaMasUsada: "TikTok",
            afectaRendimientoAcademico: "Sí",
            horasSuenoPorNoche: 5,
            estadoSentimental: "Soltero(a)",
            conflictosPorRedesSociales: "Sí"
          },
          results: {
            nivelAdiccion: 2.5,
            saludMental: 8.9,
            impactoAcademico: "Alto",
            plataformaDominante: "TikTok",
            recomendaciones: [
              "Mejora tus hábitos de sueño evitando pantallas antes de dormir",
              "Practica el uso consciente de redes sociales",
              "Crea espacios libres de distracciones digitales para estudiar"
            ],
            predictions: {
              pred1: 2.51,
              pred2: 8.93,
              pred3: 1.06,
              pred4: 2.51,
              pred5: 0.58,
              pred6: 2,
              pred7: 61,
              pred8: 3.68
            }
          }
        });
      }
    } else {
      // Datos por defecto si no hay nada en localStorage
      setStoredData({
        formData: {
          edad: 23,
          genero: "Masculino",
          nivelAcademico: "Graduate",
          pais: "Argentina",
          usoDialioHoras: 3,
          plataformaMasUsada: "TikTok",
          afectaRendimientoAcademico: "Sí",
          horasSuenoPorNoche: 5,
          estadoSentimental: "Soltero(a)",
          conflictosPorRedesSociales: "Sí"
        },
        results: {
          nivelAdiccion: 2.5,
          saludMental: 8.9,
          impactoAcademico: "Alto",
          plataformaDominante: "TikTok",
          recomendaciones: [
            "Mejora tus hábitos de sueño evitando pantallas antes de dormir",
            "Practica el uso consciente de redes sociales",
            "Crea espacios libres de distracciones digitales para estudiar"
          ],
          predictions: {
            pred1: 2.51,
            pred2: 8.93,
            pred3: 1.06,
            pred4: 2.51,
            pred5: 0.58,
            pred6: 2,
            pred7: 61,
            pred8: 3.68
          }
        }
      });
    }
    
    setLoading(false);
  }, []);

  // Datos simulados para gráficas
  const ageDistribution = [
    { age: '18-20', count: 25 },
    { age: '21-23', count: 45 },
    { age: '24-26', count: 30 },
    { age: '27-30', count: 15 }
  ];

  const platformData = [
    { name: 'TikTok', value: 35, color: '#FFB5E8' },
    { name: 'Instagram', value: 25, color: '#B5DEFF' },
    { name: 'Twitter', value: 20, color: '#C7FFDB' },
    { name: 'Facebook', value: 15, color: '#FFFAB5' },
    { name: 'Otros', value: 5, color: '#FFD1B5' }
  ];

  const sleepImpactData = [
    { hours: '1-3', academic: 80, conflicts: 90 },
    { hours: '4-6', academic: 60, conflicts: 70 },
    { hours: '7-9', academic: 20, conflicts: 30 },
    { hours: '10+', academic: 10, conflicts: 15 }
  ];

  const radarData = [
    { 
      subject: 'Horas de Sueño', 
      current: storedData?.formData.horasSuenoPorNoche || 5, 
      ideal: 8, 
      fullMark: 10 
    },
    { 
      subject: 'Uso Diario', 
      current: storedData?.formData.usoDialioHoras || 3, 
      ideal: 2, 
      fullMark: 10 
    },
    { 
      subject: 'Conflictos', 
      current: storedData?.formData.conflictosPorRedesSociales === 'Sí' ? 8 : 2, 
      ideal: 2, 
      fullMark: 10 
    },
    { 
      subject: 'Rendimiento', 
      current: storedData?.formData.afectaRendimientoAcademico === 'Sí' ? 4 : 7, 
      ideal: 9, 
      fullMark: 10 
    },
    { 
      subject: 'Bienestar', 
      current: storedData?.results.saludMental || 5, 
      ideal: 9, 
      fullMark: 10 
    }
  ];

  const usageByCountry = [
    { country: 'Argentina', usage: 3.2 },
    { country: 'México', usage: 4.1 },
    { country: 'Colombia', usage: 3.8 },
    { country: 'España', usage: 2.9 },
    { country: 'Chile', usage: 3.5 }
  ];

  const MenuItem = ({ id, icon: Icon, label, isActive, onClick }: any) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 shadow-lg' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
    <div className={`p-6 rounded-2xl shadow-lg ${color} border border-white/50 backdrop-blur-sm`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
          {trend && (
            <p className="text-xs text-gray-500 mt-1 flex items-center">
              <TrendingUp size={12} className="mr-1" />
              {trend}
            </p>
          )}
        </div>
        <div className="p-3 bg-white/50 rounded-full">
          <Icon size={24} className="text-gray-700" />
        </div>
      </div>
    </div>
  );

  const OverviewView = () => {
    if (!storedData) return <div>Cargando datos...</div>;
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Edad" 
            value={`${storedData.formData.edad} años`} 
            icon={User} 
            color="bg-gradient-to-br from-purple-100 to-purple-200"
            trend={`Nivel adicción: ${storedData.results.nivelAdiccion}`}
          />
          <StatCard 
            title="Horas de Sueño" 
            value={`${storedData.formData.horasSuenoPorNoche}h`} 
            icon={Clock} 
            color="bg-gradient-to-br from-blue-100 to-blue-200"
            trend={storedData.formData.horasSuenoPorNoche < 6 ? "Crítico" : "Moderado"}
          />
          <StatCard 
            title="Uso Diario" 
            value={`${storedData.formData.usoDialioHoras}h`} 
            icon={Smartphone} 
            color="bg-gradient-to-br from-green-100 to-green-200"
            trend={`Salud mental: ${storedData.results.saludMental}`}
          />
          <StatCard 
            title="Conflictos" 
            value={storedData.formData.conflictosPorRedesSociales} 
            icon={AlertTriangle} 
            color="bg-gradient-to-br from-red-100 to-red-200"
            trend={storedData.formData.conflictosPorRedesSociales === 'Sí' ? "Requiere atención" : "Estable"}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <BarChart3 className="mr-2 text-purple-600" />
              Distribución por Edades
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ageDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis dataKey="age" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Bar dataKey="count" fill="url(#colorGradient)" radius={8} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <PieChartIcon className="mr-2 text-blue-600" />
              Plataformas Más Usadas
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Activity className="mr-2 text-green-600" />
            Análisis de Bienestar Digital
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" className="text-sm" />
              <PolarRadiusAxis domain={[0, 10]} tickCount={6} />
              <Radar name="Actual" dataKey="current" stroke="#f59e0b" fill="#fbbf24" fillOpacity={0.3} />
              <Radar name="Ideal" dataKey="ideal" stroke="#10b981" fill="#34d399" fillOpacity={0.3} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  const AnalyticsView = () => {
    if (!storedData) return <div>Cargando datos...</div>;
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Impacto del Sueño en Rendimiento
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sleepImpactData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis dataKey="hours" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px'
                  }} 
                />
                <Line type="monotone" dataKey="academic" stroke="#ef4444" strokeWidth={3} name="Problemas Académicos %" />
                <Line type="monotone" dataKey="conflicts" stroke="#f59e0b" strokeWidth={3} name="Conflictos Sociales %" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Uso por País
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usageByCountry} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                <XAxis type="number" stroke="#6b7280" />
                <YAxis dataKey="country" type="category" stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f8fafc', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px'
                  }} 
                />
                <Bar dataKey="usage" fill="#8b5cf6" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Insights Clave del Análisis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200">
              <div className="flex items-center mb-2">
                <AlertTriangle size={20} className="text-red-600 mr-2" />
                <h4 className="font-semibold text-red-800">Alerta Crítica</h4>
              </div>
              <p className="text-sm text-red-700">Solo {storedData.formData.horasSuenoPorNoche} horas de sueño detectadas. Riesgo alto para la salud.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200">
              <div className="flex items-center mb-2">
                <Brain size={20} className="text-yellow-600 mr-2" />
                <h4 className="font-semibold text-yellow-800">Patrón Identificado</h4>
              </div>
              <p className="text-sm text-yellow-700">Conflictos sociales {storedData.formData.conflictosPorRedesSociales === 'Sí' ? 'presentes' : 'no detectados'} con uso moderado de redes.</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <div className="flex items-center mb-2">
                <CheckCircle size={20} className="text-green-600 mr-2" />
                <h4 className="font-semibold text-green-800">Aspecto Positivo</h4>
              </div>
              <p className="text-sm text-green-700">Salud mental: {storedData.results.saludMental}/10</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ReportsView = () => {
    if (!storedData) return <div>Cargando datos...</div>;
    
    return (
      <div className="space-y-6">
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Reporte Detallado de Predicciones
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700 border-b pb-2">Datos Demográficos</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-600">Edad:</span>
                  <span className="font-medium">{storedData.formData.edad} años</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-600">Género:</span>
                  <span className="font-medium">{storedData.formData.genero}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-600">País:</span>
                  <span className="font-medium">{storedData.formData.pais}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="text-gray-600">Nivel Académico:</span>
                  <span className="font-medium">{storedData.formData.nivelAcademico}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700 border-b pb-2">Comportamiento Digital</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                  <span className="text-gray-600">Plataforma Principal:</span>
                  <span className="font-medium">{storedData.formData.plataformaMasUsada}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                  <span className="text-gray-600">Uso Diario:</span>
                  <span className="font-medium">{storedData.formData.usoDialioHoras} horas</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-gray-600">Horas de Sueño:</span>
                  <span className="font-medium">{storedData.formData.horasSuenoPorNoche} horas</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-teal-50 rounded-lg">
                  <span className="text-gray-600">Estado Sentimental:</span>
                  <span className="font-medium">{storedData.formData.estadoSentimental}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-gray-800 mb-4">Resultados del Modelo</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center">
                  <GraduationCap className="text-blue-600 mr-3" size={24} />
                  <span className="text-gray-700">Impacto Académico</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  storedData.results.impactoAcademico === 'Alto' 
                    ? 'bg-red-100 text-red-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {storedData.results.impactoAcademico}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center">
                  <Users className="text-orange-600 mr-3" size={24} />
                  <span className="text-gray-700">Nivel de Adicción</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  storedData.results.nivelAdiccion > 3 
                    ? 'bg-red-100 text-red-800' 
                    : storedData.results.nivelAdiccion > 2 
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                }`}>
                  {storedData.results.nivelAdiccion}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
          <h4 className="font-semibold text-gray-800 mb-4">Recomendaciones Personalizadas</h4>
          <div className="space-y-3">
            {storedData.results.recomendaciones.map((recomendacion, index) => (
              <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="text-blue-600 mr-3 mt-1" size={20} />
                <div>
                  <p className="text-sm text-blue-700">{recomendacion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ProfileView = () => {
    if (!storedData) return <div>Cargando datos...</div>;
    
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg border border-white/50">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <User size={40} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Perfil de Usuario</h2>
              <p className="text-gray-600">Análisis detallado del comportamiento digital</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Información Personal</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Edad</label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{storedData.formData.edad} años</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Género</label>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{storedData.formData.genero}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">País</label>
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center">
                    <Globe size={16} className="mr-2 text-gray-500" />
                    <span className="font-medium">{storedData.formData.pais}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Estado Sentimental</label>
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center">
                    <Heart size={16} className="mr-2 text-gray-500" />
                    <span className="font-medium">{storedData.formData.estadoSentimental}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Patrones de Uso</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                  <div className="flex items-center">
                    <Smartphone className="text-blue-600 mr-3" size={20} />
                    <span className="text-gray-700">Plataforma Principal</span>
                  </div>
                  <span className="font-semibold text-blue-800">{storedData.formData.plataformaMasUsada}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="text-green-600 mr-3" size={20} />
                    <span className="text-gray-700">Uso Diario</span>
                  </div>
                  <span className="font-semibold text-green-800">{storedData.formData.usoDialioHoras} horas</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="text-purple-600 mr-3" size={20} />
                    <span className="text-gray-700">Horas de Sueño</span>
                  </div>
                  <span className="font-semibold text-purple-800">{storedData.formData.horasSuenoPorNoche} horas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Estado Actual</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <AlertTriangle size={24} className="text-white" />
                  </div>
                  <p className="text-sm font-medium text-red-800">Nivel de Adicción</p>
                  <p className="text-2xl font-bold text-red-600">{storedData.results.nivelAdiccion}</p>
                  <p className="text-xs text-red-600">
                    {storedData.results.nivelAdiccion > 3 ? 'Alto' : storedData.results.nivelAdiccion > 2 ? 'Moderado' : 'Bajo'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Salud Mental</h3>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Brain size={24} className="text-white" />
                </div>
                <p className="text-2xl font-bold text-blue-600">{storedData.results.saludMental}/10</p>
                <p className="text-xs text-blue-600 mt-1">
                  {storedData.results.saludMental > 8 ? 'Excelente' : storedData.results.saludMental > 6 ? 'Buena' : 'Necesita mejora'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const views = {
    overview: { component: OverviewView, title: 'Vista General' },
    analytics: { component: AnalyticsView, title: 'Análisis Avanzado' },
    reports: { component: ReportsView, title: 'Reportes Detallados' },
    profile: { component: ProfileView, title: 'Perfil de Usuario' }
  };

  const CurrentView = views[activeView as keyof typeof views].component;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando datos del usuario...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 pt-10">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white/80 backdrop-blur-sm border-r border-white/50 p-6 min-h-screen">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <Brain className="mr-3 text-purple-600" />
              IA Insights
            </h1>
            <p className="text-sm text-gray-600 mt-1">Dashboard de Predicciones</p>
          </div>
          
          <nav className="space-y-2">
            <MenuItem 
              id="overview" 
              icon={BarChart3} 
              label="Vista General" 
              isActive={activeView === 'overview'} 
              onClick={setActiveView} 
            />
            <MenuItem 
              id="analytics" 
              icon={Activity} 
              label="Análisis Avanzado" 
              isActive={activeView === 'analytics'} 
              onClick={setActiveView} 
            />
            <MenuItem 
              id="reports" 
              icon={PieChartIcon} 
              label="Reportes" 
              isActive={activeView === 'reports'} 
              onClick={setActiveView} 
            />
            <MenuItem 
              id="profile" 
              icon={User} 
              label="Perfil Usuario" 
              isActive={activeView === 'profile'} 
              onClick={setActiveView} 
            />
          </nav>

          <div className="mt-12 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-2">Modelo IA</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Precisión:</span>
                <span className="font-medium text-green-600">94.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Confianza:</span>
                <span className="font-medium text-blue-600">87.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Predicciones:</span>
                <span className="font-medium text-purple-600">1,247</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {views[activeView as keyof typeof views].title}
            </h2>
            <p className="text-gray-600">
              {activeView === 'overview' && 'Resumen ejecutivo de las predicciones del modelo de IA'}
              {activeView === 'analytics' && 'Análisis profundo de patrones y correlaciones'}
              {activeView === 'reports' && 'Informes detallados y recomendaciones personalizadas'}
              {activeView === 'profile' && 'Perfil completo del usuario analizado'}
            </p>
          </div>

          {storedData && <CurrentView />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;