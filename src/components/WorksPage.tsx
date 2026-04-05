import { useEffect } from 'react';
import { useSiteContent } from '../utils/siteContent';

export default function WorksPage() {
  const { content } = useSiteContent();

  useEffect(() => {
    document.title = 'Çalışmalarımız | Manas Teknoloji';
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-white overflow-hidden">
      <div className="relative isolate">
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(227,30,36,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(227,30,36,0.35) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />
        </div>
        <div className="absolute top-24 left-10 h-72 w-72 rounded-full bg-brand-red/12 blur-3xl" />
        <div className="absolute bottom-16 right-8 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl" />

        <header className="relative z-10 border-b border-white/8 bg-brand-dark/75 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a href="./index.html#hero" className="flex items-center gap-3 group">
              <div className="rounded-2xl bg-white p-1 shadow-lg shadow-black/20 ring-1 ring-white/70 transition-all duration-300 group-hover:ring-brand-red/40">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.png`}
                  alt="Manas Teknoloji logosu"
                  className="h-11 w-11 object-contain sm:h-12 sm:w-12"
                />
              </div>
              <div className="leading-none">
                <span className="text-lg font-bold tracking-tight">MANAS</span>
                <span className="ml-1 text-lg font-light tracking-tight text-brand-red">TEKNOLOJİ</span>
              </div>
            </a>

            <a
              href="./index.html#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-brand-red hover:bg-white/5"
            >
              İletişime Geç
            </a>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto max-w-7xl px-4 pb-14 pt-20 sm:px-6 lg:px-8 lg:pt-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">{content.works.eyebrow}</span>
              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                {content.works.title}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-gray sm:text-lg">
                {content.works.description}
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
            <div className="grid gap-5 lg:grid-cols-3">
              {content.works.items.map((group) => (
                <article key={group.title} className="glass-card rounded-2xl p-6 sm:p-7">
                  <div className="mb-5 inline-flex rounded-xl bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
                    {group.status}
                  </div>
                  <div className="mb-5 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/5">
                    <img src={group.image} alt={group.title} loading="lazy" decoding="async" className="h-52 w-full object-cover" />
                  </div>
                  <h2 className="text-2xl font-black text-white">{group.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-brand-gray sm:text-base">
                    {group.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
            <div className="glass-card rounded-3xl p-8 text-center sm:p-10">
              <h2 className="text-3xl font-black text-white sm:text-4xl">{content.works.ctaTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-brand-gray sm:text-base">
                {content.works.ctaDescription}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="./index.html#hero"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-brand-red hover:bg-white/5"
                >
                  Ana Sayfaya Dön
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}