import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { RouteScroll } from './components/RouteScroll';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Projects } from './pages/Projects';
import { Quote } from './pages/Quote';
import { Reviews } from './pages/Reviews';
import { ServiceCategoryDetail } from './pages/ServiceCategoryDetail';
import { ServiceDetail } from './pages/ServiceDetail';
import { Services } from './pages/Services';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#262522] text-[#fffdf0]">
      <Header />
      <RouteScroll />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/capabilities" element={<Navigate to="/about" replace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/category/:categorySlug" element={<ServiceCategoryDetail />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
