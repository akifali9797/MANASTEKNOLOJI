const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Güvenilir Altyapı',
    desc: 'Enterprise seviye network ve sunucu çözümleri ile kesintisiz hizmet.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: '7/24 Teknik Destek',
    desc: 'Uzman ekibimiz ile günün her saati yanınızdayız.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Yüksek Performans',
    desc: 'Optimize edilmiş sistemler ile maksimum verimlilik ve hız.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Otomatik Güncelleme',
    desc: 'Merkezi yönetim ile tüm istemciler anında güncellenir.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-brand-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #E31E24 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/about-bg.jpg`}
                alt="Manas Teknoloji Altyapı"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-8 glass-card rounded-2xl p-6 animate-float">
              <div className="text-center">
                <div className="text-5xl font-black gradient-text">19+</div>
                <div className="text-sm font-semibold text-white mt-1">Yıllık</div>
                <div className="text-sm font-semibold text-brand-gray">Deneyim</div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-red/20 rounded-2xl" />
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-brand-red text-xs font-bold tracking-wider uppercase">Hakkımızda</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Türkiye'nin{' '}
              <span className="gradient-text">E-Spor</span> ve{' '}
              <span className="gradient-text">Disksiz Teknoloji</span>{' '}
              Öncüsü
            </h2>

            <p className="text-brand-gray text-lg leading-relaxed mb-8">
              Manas Teknoloji 2007 yılında Ar-Ge amaçlı açtığı ilk internet kafesiyle sektöre
              giriş yapmıştır. Projeleriyle birçok başarılı girişimciye ilham kaynağı olmuş,
              internet kafeciliği daha modern hale getirmiş, sektörü ayakta tutacak dokunuşlar
              sayesinde yüzlerce insanı sektöre çekerek istihdam yaratmıştır.
            </p>

            <p className="text-brand-gray leading-relaxed mb-10">
              Türkiye'nin ilk yiyecek ve içecek ağırlıklı internet kafesini 2009 yılında açarak
              ayda yaklaşık 100.000 dolar ciroyla sektöre olan bakış açısını değiştirmeyi
              başarmıştır. Bu minvalde kurumsal işletmeler, e-spor salonları ve üniversitelerde
              disksiz sistem kurulumları ile dizi, film ve program arşivi desteği sunmaya devam
              etmektedir.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group glass-card rounded-xl p-5 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1">{feature.title}</h3>
                      <p className="text-brand-gray text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
