import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ModelsSection from '../components/home/ModelsSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <ModelsSection />
      <CTASection />
    </div>
  );
};

export default Home;