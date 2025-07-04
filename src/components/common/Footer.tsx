import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0081A7] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#F07167] to-[#FED9B7] rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">SOMA</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Análisis inteligente del impacto de las redes sociales en tu vida personal y académica.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Características</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Predicción de Adicción</li>
              <li>Análisis Académico</li>
              <li>Salud Mental</li>
              <li>Patrones de Sueño</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Modelos</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Machine Learning</li>
              <li>Regresión Lineal</li>
              <li>Random Forest</li>
              <li>Clustering</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Soporte Técnico</li>
              <li>Documentación</li>
              <li>API Access</li>
              <li>Comunidad</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-600 mt-8 pt-8 text-center text-blue-100">
          <p>&copy; 2025 SOMA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;