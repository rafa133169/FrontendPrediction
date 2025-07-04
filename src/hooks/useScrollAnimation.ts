import { useEffect, useState } from 'react';
import { useScroll, useTransform, MotionValue } from 'framer-motion';

interface UseScrollAnimationOptions {
  offset?: number;
  threshold?: number;
}

interface UseScrollAnimationReturn {
  isInView: boolean;
  scrollY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
  opacity: MotionValue<number>;
  translateY: MotionValue<number>;
  scale: MotionValue<number>;
}

export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn => {
  const { offset = 0, threshold = 0.1 } = options;
  const [isInView, setIsInView] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  // Transform values based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.documentElement;
      const scrollTop = element.scrollTop;
      const scrollHeight = element.scrollHeight - element.clientHeight;
      const scrollPercentage = scrollTop / scrollHeight;
      
      setIsInView(scrollPercentage > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return {
    isInView,
    scrollY,
    scrollYProgress,
    opacity,
    translateY,
    scale
  };
};

// Hook for parallax effect
export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

// Hook for fade in animation based on scroll
export const useFadeInOnScroll = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercentage = scrollTop / (documentHeight - windowHeight);
      setIsVisible(scrollPercentage > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isVisible;
};

// Hook for element visibility in viewport
export const useInViewport = (ref: React.RefObject<HTMLElement>) => {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isInViewport;
};

// Custom hook for smooth scroll to element
export const useSmoothScroll = () => {
  const scrollToElement = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return { scrollToElement, scrollToTop };
};

export default useScrollAnimation;