import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Models from './pages/Models';
import Contact from './pages/Contact';
import Prediction from './pages/Prediction';
import Dashboard from './DashboardPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#FDFCDC] via-[#FED9B7] to-[#FDFCDC]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/models" element={<Models />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;