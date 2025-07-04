import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <>
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-br from-[#F07167] to-[#FED9B7] rounded-full opacity-20"
      />
      <motion.div
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -5, 0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 right-10 w-12 h-12 bg-gradient-to-br from-[#00AFB9] to-[#0081A7] rounded-full opacity-20"
      />
    </>
  );
};

export default FloatingElements;