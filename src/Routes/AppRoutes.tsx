// src/routes/AppRoutes.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import FaqPage from '../pages/FaqPage';
import TeamPage from '../pages/TeamPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
// import Header from '../components/Header';
import Header from '../components/Header';
import Footer from '../components/Footer'; 

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {/* Header e Footer ficam fora do <Routes> para aparecerem em todas as páginas */}
      <Header />
      <main className="pt-20"> {/* pt-20 para não ficar embaixo do header fixo */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/integrantes" element={<TeamPage />} />
          {/* Rota Dinâmica para atender ao critério de useParams() */}
          <Route path="/servico/:id" element={<ServiceDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}