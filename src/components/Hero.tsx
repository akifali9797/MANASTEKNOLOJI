import { useEffect, useState } from 'react';

const stats = [
  { value: 3000, suffix: '+', label: 'Kurulan Merkez' },
  { value: 19, suffix: '+', label: 'Yıllık Deneyim' },
  { value: 500, suffix: '+', label: 'Mutlu Müşteri' },
  { value: 81, suffix: '', label: 'İlde Hizmet' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById(`counter-${target}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span id={`counter-${target}`}>
      {count.toLocaleString('tr-TR')}{suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.jpg`}
          alt="E-Spor Merkezi"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(227,30,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(227,30,36,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Red Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-5 py-2 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
          <span className="text-brand-red text-sm font-semibold tracking-wide">Türkiye'nin #1 Disksiz Sistem Çözüm Ortağı</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up delay-100">
          E-Spor Merkezleri &<br />
          <span className="gradient-text">NetKafem sistemine</span><br />
          Kurumsal Çözümler
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-brand-gray max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          İnternet kafeler, e-spor salonları ve eğitim laboratuvarları için
          profesyonel disksiz sistem altyapısı ve network çözümleri sunuyoruz.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
          <a
            href="#solutions"
            className="group relative inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-red/30 hover:-translate-y-1 text-lg"
          >
            Çözümlerimizi Keşfet
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 border-2 border-white/20 hover:border-brand-red text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:-translate-y-1 text-lg"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Demo Talep Et
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-400">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-brand-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-brand-red rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
