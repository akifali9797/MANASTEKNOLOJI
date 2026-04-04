const solutions = [
  {
    num: '01',
    title: 'Disksiz Önyükleme',
    desc: 'PXE ile ağ üzerinden boot, HDD/SSD gerektirmez.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Ağ Tasarımı',
    desc: 'Düşük gecikmeli, yüksek bant genişlikli network mimarisi.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Merkezi Yazılım',
    desc: 'Tek panelden tüm istemcileri yönetin ve güncelleyin.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Güvenlik Duvarı',
    desc: 'İleri seviye firewall ve ağ güvenlik çözümleri.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Otomatik Yedekleme',
    desc: 'Düzenli ve otomatik sistem yedekleme ve geri yükleme.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Performans İzleme',
    desc: 'Gerçek zamanlı sistem performansı ve kullanım analizi.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32 bg-brand-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(227,30,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(227,30,36,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-brand-red text-xs font-bold tracking-wider uppercase">Çözümlerimiz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Uçtan Uca <span className="gradient-text">Teknoloji</span> Çözümleri
          </h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            İhtiyacınıza özel tasarlanmış kapsamlı çözümlerimiz ile
            işletmenizi bir adım öne taşıyın.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-brand-red/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-brand-red/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
                  {/* Number */}
                  <div className="text-3xl sm:text-5xl font-black leading-none text-white/5 group-hover:text-brand-red/10 transition-colors duration-300">
                    {solution.num}
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-brand-red/10 rounded-lg sm:rounded-xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    {solution.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{solution.title}</h3>

                {/* Description */}
                <p className="text-[13px] sm:text-sm leading-relaxed text-brand-gray">{solution.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
