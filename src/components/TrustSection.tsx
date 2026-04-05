const sectors = [
  {
    title: 'E-Spor Salonları',
    description: 'Turnuva hazır network topolojileri, yayın alanları ve merkezi yönetim kurulumları.',
  },
  {
    title: 'İnternet Kafeler',
    description: 'Disksiz sistem, hızlı geri yükleme ve düşük bakım maliyeti sağlayan altyapılar.',
  },
  {
    title: 'Üniversite Laboratuvarları',
    description: 'Standart imaj, hızlı dağıtım ve kolay bakım gerektiren eğitim senaryoları.',
  },
  {
    title: 'Kurumsal Eğitim Alanları',
    description: 'Merkezi kontrol, kullanıcı profili yönetimi ve güvenli kullanım senaryoları.',
  },
];

const outcomes = [
  { value: '7/24', label: 'operasyonel destek yaklaşımı' },
  { value: 'Tek Nokta', label: 'altyapı, disksiz sistem ve yönetim koordinasyonu' },
  { value: 'Hızlı', label: 'kurulum sonrası devreye alma ve standardizasyon' },
];

export default function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-brand-darker py-24 lg:py-32">
      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-brand-red/6 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5">
              <span className="text-brand-red text-xs font-bold uppercase tracking-wider">Güven Katmanı</span>
            </div>
            <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Hangi alanlarda <span className="gradient-text">değer üretiyoruz</span> net biçimde görünsün.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-brand-gray sm:text-lg">
              Sitenin daha ikna edici olması için sadece hizmet anlatmak yetmez. Kime hizmet verdiğiniz, nasıl sonuç aldığınız ve hangi operasyon modelinde çalıştığınız da görünür olmalı.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {outcomes.map((outcome) => (
                <div key={outcome.label} className="glass-card rounded-2xl p-5">
                  <div className="text-2xl font-black text-white">{outcome.value}</div>
                  <p className="mt-2 text-sm leading-7 text-brand-gray">{outcome.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {sectors.map((sector) => (
              <article key={sector.title} className="glass-card rounded-3xl p-6 sm:p-7">
                <div className="mb-4 inline-flex rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-red">
                  Çalışma Alanı
                </div>
                <h3 className="text-2xl font-black text-white">{sector.title}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-gray sm:text-base">{sector.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}