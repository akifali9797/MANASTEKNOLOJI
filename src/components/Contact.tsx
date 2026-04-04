export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-brand-darker overflow-hidden">
      {/* Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-brand-red text-xs font-bold tracking-wider uppercase">İletişim</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
          Projenizi <span className="gradient-text">Konuşalım</span>
        </h2>

        <p className="text-brand-gray text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          İhtiyaçlarınızı analiz edelim, size özel çözüm önerilerimizi sunalım.
          Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
        </p>

        {/* WhatsApp CTA */}
        <div className="mb-16">
          <a
            href="https://wa.me/905354302875"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-1 text-lg animate-glow"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp ile Hemen Yazın
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {/* Phone */}
          <a
            href="tel:+905354302875"
            aria-label="Manas Teknoloji telefon numarasını ara"
            className="glass-card block rounded-xl p-6 hover:border-brand-red/30 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm mb-2">Telefon</h3>
            <span className="text-brand-gray text-sm hover:text-brand-red transition-colors">
              +90 (535) 430 28 75
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:manasteknoloji@icloud.com"
            aria-label="Manas Teknoloji'ye e-posta gonder"
            className="glass-card block rounded-xl p-6 hover:border-brand-red/30 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm mb-2">E-posta</h3>
            <span className="text-brand-gray text-sm hover:text-brand-red transition-colors">
              manasteknoloji@icloud.com
            </span>
          </a>

          {/* Address */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=H%C3%BCrriyet%20Mahallesi%20Mahmutbey%20Caddesi%20No%3A25%20Bah%C3%A7elievler%20%C4%B0stanbul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Manas Teknoloji adresini haritada ac"
            className="glass-card block rounded-xl p-6 hover:border-brand-red/30 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center text-brand-red mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-sm mb-2">Adres</h3>
            <span className="text-brand-gray text-sm leading-relaxed">
              Hürriyet Mahallesi Mahmutbey Caddesi No:25/ Bahçelievler/İSTANBUL
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
