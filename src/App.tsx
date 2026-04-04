import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
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
