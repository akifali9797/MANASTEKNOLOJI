const steps = [
  {
    number: '01',
    title: 'Keşif ve Analiz',
    description: 'Mekanın büyüklüğü, kullanıcı yoğunluğu, ağ ihtiyaçları ve yönetim senaryoları analiz edilir.',
  },
  {
    number: '02',
    title: 'Mimari Tasarım',
    description: 'Disksiz sistem, network topolojisi, güvenlik ve yönetim akışı tek plan altında kurgulanır.',
  },
  {
    number: '03',
    title: 'Kurulum ve Test',
    description: 'Altyapı sahada devreye alınır, performans testi yapılır ve kullanıcı senaryoları denenir.',
  },
  {
    number: '04',
    title: 'Destek ve İyileştirme',
    description: 'Kurulum sonrası destek, güncelleme yönetimi ve kapasite planı ile sistem canlı tutulur.',
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 lg:py-32">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(227,30,36,0.75) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5">
            <span className="text-brand-red text-xs font-bold uppercase tracking-wider">Süreç</span>
          </div>
          <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Projeyi nasıl <span className="gradient-text">ilerlettiğimiz</span> baştan net olsun.
          </h2>
          <p className="mt-6 text-base leading-8 text-brand-gray sm:text-lg">
            Güçlü teknoloji projeleri sadece kurulumla değil; doğru keşif, doğru mimari ve kurulum sonrası destek ritmiyle başarılı olur.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="glass-card rounded-3xl p-6 sm:p-7">
              <div className="text-4xl font-black leading-none text-white/10">{step.number}</div>
              <h3 className="mt-5 text-xl font-black text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-brand-gray sm:text-base">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}