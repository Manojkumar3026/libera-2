import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import WhyLibera from './pages/WhyLibera';
import FAQ from './pages/FAQ';
import Support from './pages/Support';
import { AnimatePresence, motion } from 'framer-motion';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/how-it-works" element={<PageWrapper><HowItWorks /></PageWrapper>} />
        <Route path="/why-libera" element={<PageWrapper><WhyLibera /></PageWrapper>} />
        <Route path="/faqs" element={<PageWrapper><FAQ /></PageWrapper>} />
        <Route path="/support" element={<PageWrapper><Support /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
