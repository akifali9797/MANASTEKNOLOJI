const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/manasteknoloji',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/manasteknoloji',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/manasteknoloji',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/manasteknoloji',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.446-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://api.whatsapp.com/send/?phone=905354302875&text&type=phone_number&app_absent=0',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { label: 'Anasayfa', href: '#hero' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetler', href: '#services' },
  { label: 'Çözümler', href: '#solutions' },
  { label: 'İletişim', href: '#contact' },
];

function getSocialStyles(name: string) {
  switch (name) {
    case 'Instagram':
      return {
        button:
          'border-fuchsia-500/20 bg-[linear-gradient(145deg,rgba(24,24,32,0.96),rgba(15,23,42,0.92))] hover:border-fuchsia-400/40 hover:shadow-fuchsia-500/15',
        icon:
          'bg-[linear-gradient(135deg,rgba(225,48,108,0.22),rgba(245,96,64,0.18),rgba(252,175,69,0.16))] text-rose-100 group-hover:text-fuchsia-200',
      };
    case 'Facebook':
      return {
        button:
          'border-blue-500/20 bg-[linear-gradient(145deg,rgba(24,24,32,0.96),rgba(15,23,42,0.92))] hover:border-blue-400/40 hover:shadow-blue-500/15',
        icon:
          'bg-blue-500/15 text-blue-100 group-hover:text-blue-200',
      };
    case 'X':
      return {
        button:
          'border-white/15 bg-[linear-gradient(145deg,rgba(20,20,24,0.98),rgba(10,10,14,0.94))] hover:border-white/30 hover:shadow-black/30',
        icon:
          'bg-white/10 text-white group-hover:text-white',
      };
    case 'LinkedIn':
      return {
        button:
          'border-cyan-500/20 bg-[linear-gradient(145deg,rgba(24,24,32,0.96),rgba(15,23,42,0.92))] hover:border-cyan-400/40 hover:shadow-cyan-500/15',
        icon:
          'bg-cyan-500/15 text-cyan-100 group-hover:text-cyan-200',
      };
    case 'WhatsApp':
      return {
        button:
          'border-emerald-500/20 bg-[linear-gradient(145deg,rgba(24,24,32,0.96),rgba(15,23,42,0.92))] hover:border-emerald-400/40 hover:shadow-emerald-500/15',
        icon:
          'bg-emerald-500/15 text-emerald-100 group-hover:text-emerald-200',
      };
    default:
      return {
        button:
          'border-white/10 bg-[linear-gradient(145deg,rgba(24,24,32,0.96),rgba(15,23,42,0.92))] hover:border-brand-red/40 hover:shadow-brand-red/15',
        icon:
          'bg-white/10 text-white group-hover:text-brand-red',
      };
  }
}

export default function Footer() {
  return (
    <footer className="relative bg-brand-darker border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative overflow-hidden rounded-xl bg-white ring-1 ring-white/70 shadow-lg shadow-black/25">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.png`}
                  alt="Manas Teknoloji logosu"
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-12 object-contain p-1"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-white">MANAS</span>
                <span className="text-xl font-light text-brand-red ml-1">TEKNOLOJİ</span>
              </div>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed max-w-md mb-6">
              Türkiye'nin lider disksiz sistem ve e-spor altyapı çözüm sağlayıcısı.
              19+ yıllık deneyimimizle işletmenizi geleceğe taşıyoruz.
            </p>
            {/* Social */}
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => {
                const styles = getSocialStyles(social.name);

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className={`group flex h-12 w-12 items-center justify-center rounded-xl border text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${styles.button}`}
                  >
                    <span className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300 ${styles.icon}`}>
                      {social.icon}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-gray text-sm hover:text-brand-red transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Hizmetler</h3>
            <ul className="space-y-3">
              {['Disksiz Sistemler', 'E-Spor Altyapısı', 'Network Çözümleri', 'Merkezi Yönetim', 'Teknik Destek'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-brand-gray text-sm hover:text-brand-red transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray text-sm">
            © 2026 Manas Teknoloji. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-brand-gray text-xs hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-brand-gray text-xs hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>

        <div className="border-t border-white/5 py-4 text-center">
          <p className="text-xs text-brand-gray tracking-wide">
            ©2007-2026, Manas Technologies all rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
