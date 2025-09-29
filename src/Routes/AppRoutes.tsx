// src/routes/AppRoutes.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import FaqPage from '../pages/FaqPage';
import TeamPage from '../pages/TeamPage';
import ServiceDetailPage from '../pages/ServiceDetailPage'; // Rota dinâmica!

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/integrantes" element={<TeamPage />} />
        {/* Rota Dinâmica: Atende ao critério de useParams() */}
        <Route path="/servico/:id" element={<ServiceDetailPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}