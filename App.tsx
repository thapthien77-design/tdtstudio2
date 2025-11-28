import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import Process from './components/Process';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingContact from './components/FloatingContact';
import Chatbot from './components/Chatbot';
import Careers from './components/Careers';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Orders from './components/Orders';
import AuthModal from './components/AuthModal';
import AdminDashboard from './components/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import { SettingsProvider } from './context/SettingsContext';

function App() {
  return (
    <SettingsProvider>
      <AuthProvider>
        <HashRouter>
          <div className="bg-dark-950 min-h-screen text-white selection:bg-gold-500 selection:text-dark-900 flex flex-col">
            <Navbar />
            <AuthModal />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/process" element={<Process />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
            <Chatbot />
            <FloatingContact />
          </div>
        </HashRouter>
      </AuthProvider>
    </SettingsProvider>
  );
}

export default App;