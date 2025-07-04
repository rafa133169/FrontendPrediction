import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-[#FED9B7]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#F07167] to-[#0081A7] rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#F07167] to-[#0081A7] bg-clip-text text-transparent">
                SOMA
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.path}
                  className={`transition-colors font-medium ${
                    location.pathname === item.path
                      ? 'text-[#F07167]'
                      : 'text-[#0081A7] hover:text-[#F07167]'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#00AFB9] text-white"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          className="fixed top-16 right-0 w-64 h-full bg-white/95 backdrop-blur-md z-40 shadow-xl md:hidden"
        >
          <div className="p-6 space-y-6">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block transition-colors font-medium text-lg ${
                  location.pathname === item.path
                    ? 'text-[#F07167]'
                    : 'text-[#0081A7] hover:text-[#F07167]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Header;