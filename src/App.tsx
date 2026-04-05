import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorksPage from './components/WorksPage';

export default function App() {
  const isWorksPage = new URLSearchParams(window.location.search).get('sayfa') === 'calismalarimiz';

  if (isWorksPage) {
    return <WorksPage />;
  }

  return (
    <div className="min-h-screen bg-brand-dark">
      <Header />
      <Hero />
      <About />
      <Services />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
}
