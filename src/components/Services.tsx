const services = [
  {
    title: 'Profesyonel E-Spor Altyapısı',
    desc: 'E-spor merkezleri ve gaming salonları için uçtan uca network ve donanım altyapısı kurulumu.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    features: [
      'Düşük gecikmeli network tasarımı',
      'Gaming-grade switch ve router yapılandırması',
      'Turnuva ve etkinlik altyapısı',
      'Spectator ve yayın sistemleri',
      'RGB ve ambient aydınlatma entegrasyonu',
    ],
  },
  {
    title: 'Disksiz Bilgisayar Sistemleri',
    desc: 'Tüm istemcilerin sunucu üzerinden boot edildiği, merkezi yönetim sağlanan profesyonel disksiz sistem çözümleri.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    features: [
      'PXE network boot desteği',
      'Merkezi imaj yönetimi',
      'Anlık yazılım dağıtımı',
      'Snapshot ve geri yükleme',
      'Kullanıcı profili yönetimi',
    ],
  },
  {
    title: 'Merkezi Yönetim & İzleme',
    desc: 'Tüm istemci bilgisayarları tek bir panelden yönetin, izleyin ve kontrol edin.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    features: [
      'Web tabanlı yönetim paneli',
      'Uzaktan masaüstü erişimi',
      'Bant genişliği izleme',
      'Otomatik yedekleme sistemi',
      'Detaylı raporlama ve analitik',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-brand-darker overflow-hidden">
      {/* Red Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-brand-red text-xs font-bold tracking-wider uppercase">Hizmetlerimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Profesyonel <span className="gradient-text">Teknoloji</span> Hizmetleri
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            İnternet kafenizden e-spor salonunuza, eğitim laboratuvarınızdan
            oyun merkezlerinize kadar geniş bir yelpazede hizmet sunuyoruz.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-2xl p-8 hover:border-brand-red/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-brand-red/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-red/20">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-brand-gray text-sm leading-relaxed mb-6">{service.desc}</p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-brand-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-brand-red text-sm font-semibold group/link"
                  >
                    Detaylı Bilgi
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
