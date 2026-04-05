import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import TrustSection from './components/TrustSection';
import ProcessSection from './components/ProcessSection';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorksPage from './components/WorksPage';
import AdminPage from './components/AdminPage';

export default function App() {
  const activePage = new URLSearchParams(window.location.search).get('sayfa');

  if (activePage === 'calismalarimiz') {
    return <WorksPage />;
  }

  if (activePage === 'admin') {
    return <AdminPage />;
  }

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <TrustSection />
      <ProcessSection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
