const faqs = [
  {
    question: 'Disksiz sistem kurulumları hangi işletmeler için uygundur?',
    answer:
      'İnternet kafeler, e-spor salonları, eğitim laboratuvarları ve çok sayıda istemci bilgisayarı merkezi olarak yönetmek isteyen tüm yapılarda uygundur.',
  },
  {
    question: 'Mevcut bilgisayar altyapımızı tamamen değiştirmek gerekir mi?',
    answer:
      'Hayır. Çoğu projede mevcut altyapı analiz edilerek uygun parçalar korunur, darboğaz yaratan bileşenler iyileştirilir ve maliyet kontrollü bir dönüşüm planı hazırlanır.',
  },
  {
    question: 'Kurulum sonrası destek veriyor musunuz?',
    answer:
      'Evet. Sistem kurulduktan sonra uzaktan erişim, güncelleme planı, bakım ve operasyon desteği tarafında devam eden destek modeli sunulur.',
  },
  {
    question: 'Çalışmalarımız sayfasına projeler nasıl eklenecek?',
    answer:
      'Hazırlanan admin paneli üzerinden proje kartlarına görsel, açıklama ve durum bilgisi eklenebilir. Şu an bu yapı yerel yönetim mantığında çalışır.',
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden bg-brand-darker py-24 lg:py-32">
      <div className="absolute bottom-0 right-0 h-[340px] w-[340px] rounded-full bg-brand-red/8 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5">
            <span className="text-brand-red text-xs font-bold uppercase tracking-wider">SSS</span>
          </div>
          <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Karar sürecini hızlandıran <span className="gradient-text">sık sorulan sorular</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-brand-gray sm:text-lg">
            Potansiyel müşterinin aklındaki temel sorular sayfada ne kadar net cevaplanırsa dönüşüm ihtimali o kadar artar.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="glass-card rounded-3xl p-6 sm:p-7">
              <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-white marker:hidden">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-brand-gray sm:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}