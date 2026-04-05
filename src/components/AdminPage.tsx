import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import {
  createDefaultContent,
  loadSiteContent,
  loginAdmin,
  saveAdminPassword,
  saveSiteContent,
  SiteContent,
  uploadAdminFile,
  WorksItem,
} from '../utils/siteContent';

function updateWorkItem(items: WorksItem[], itemId: string, patch: Partial<WorksItem>) {
  return items.map((item) => (item.id === itemId ? { ...item, ...patch } : item));
}

export default function AdminPage() {
  const baseUrl = useMemo(() => import.meta.env.BASE_URL, []);
  const [content, setContent] = useState<SiteContent>(() => createDefaultContent(baseUrl));
  const [loginPassword, setLoginPassword] = useState('');
  const [activePassword, setActivePassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [passwordForm, setPasswordForm] = useState({ current: '', next: '', repeat: '' });

  useEffect(() => {
    document.title = 'Admin Paneli | Manas Teknoloji';
    void loadSiteContent(baseUrl).then(setContent);
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await loginAdmin(loginPassword);
      setIsAuthenticated(true);
      setActivePassword(loginPassword);
      setLoginError('');
      setStatusMessage('Admin paneline giriş yapıldı. Yapılan değişiklikler artık veritabanına kaydedilecek.');
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : 'Şifre yanlış.');
    }
  };

  const handleSave = async () => {
    try {
      await saveSiteContent(activePassword, content);
      setStatusMessage('İçerik veritabanına kaydedildi. Bu backend’i kullanan herkes değişiklikleri görebilir.');
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Kaydetme işlemi başarısız.');
    }
  };

  const handleReset = async () => {
    const defaults = createDefaultContent(baseUrl);
    setContent(defaults);
    try {
      await saveSiteContent(activePassword, defaults);
      setStatusMessage('İçerik varsayılan değerlere döndürüldü ve veritabanına kaydedildi.');
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Varsayılan değerler kaydedilemedi.');
    }
  };

  const handlePasswordChange = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!passwordForm.next || passwordForm.next.length < 4) {
      setStatusMessage('Yeni şifre en az 4 karakter olmalı.');
      return;
    }

    if (passwordForm.next !== passwordForm.repeat) {
      setStatusMessage('Yeni şifre tekrar alanı eşleşmiyor.');
      return;
    }

    try {
      await saveAdminPassword(passwordForm.current, passwordForm.next);
      setActivePassword(passwordForm.next);
      setPasswordForm({ current: '', next: '', repeat: '' });
      setStatusMessage('Admin şifresi veritabanında güncellendi.');
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Şifre güncellenemedi.');
    }
  };

  const handleImageUpload = async (
    event: ChangeEvent<HTMLInputElement>,
    onLoaded: (imageUrl: string) => void
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    try {
      const imageUrl = await uploadAdminFile(activePassword, file);
      onLoaded(imageUrl);
      setStatusMessage('Görsel sunucuya yüklendi. Kaydet butonuna basınca içerik veritabanına yazılır.');
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Görsel yüklenemedi.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-darker px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md glass-card rounded-3xl p-8 sm:p-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Admin</span>
          </div>
          <h1 className="text-3xl font-black">Yönetim Paneli</h1>
          <p className="mt-4 text-sm leading-7 text-brand-gray">
            Bu panel artık backend + SQLite veritabanı ile çalışır. Varsayılan giriş şifresi 12345.
          </p>
          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-white">Şifre</span>
              <input
                type="password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-brand-red"
              />
            </label>
            {loginError ? <p className="text-sm text-brand-red">{loginError}</p> : null}
            <button
              type="submit"
              className="w-full rounded-2xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-red-dark"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-darker text-white">
      <header className="border-b border-white/8 bg-brand-dark/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Manas Admin</p>
            <h1 className="mt-2 text-2xl font-black sm:text-3xl">Site yönetim paneli</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="./index.html#hero" className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-brand-red hover:bg-white/5">Ana Sayfa</a>
            <a href="./index.html?sayfa=calismalarimiz" className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-brand-red hover:bg-white/5">Çalışmalar</a>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <section className="space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-black">Hero alanı</h2>
                <p className="mt-2 text-sm leading-7 text-brand-gray">Ana sayfadaki arka plan ve başlık metinlerini buradan değiştir.</p>
              </div>
              <button onClick={handleSave} className="rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition-all hover:bg-brand-red-dark">Kaydet</button>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">Hero arka plan görsel URL</span>
                <input value={content.hero.backgroundImage} onChange={(event) => setContent({ ...content, hero: { ...content.hero, backgroundImage: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">Hero görsel yükle</span>
                <input type="file" accept="image/*" onChange={(event) => void handleImageUpload(event, (dataUrl) => setContent({ ...content, hero: { ...content.hero, backgroundImage: dataUrl } }))} className="block w-full text-sm text-brand-gray file:mr-4 file:rounded-xl file:border-0 file:bg-brand-red file:px-4 file:py-2 file:font-semibold file:text-white" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">1. satır</span>
                <input value={content.hero.titleLine1} onChange={(event) => setContent({ ...content, hero: { ...content.hero, titleLine1: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Vurgulu satır</span>
                <input value={content.hero.titleHighlight} onChange={(event) => setContent({ ...content, hero: { ...content.hero, titleHighlight: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">3. satır</span>
                <input value={content.hero.titleLine3} onChange={(event) => setContent({ ...content, hero: { ...content.hero, titleLine3: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">Alt açıklama</span>
                <textarea value={content.hero.subtitle} onChange={(event) => setContent({ ...content, hero: { ...content.hero, subtitle: event.target.value } })} rows={4} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">İkincil buton etiketi</span>
                <input value={content.hero.secondaryButtonLabel} onChange={(event) => setContent({ ...content, hero: { ...content.hero, secondaryButtonLabel: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-black">Hakkımızda alanı</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">About görsel URL</span>
                <input value={content.about.backgroundImage} onChange={(event) => setContent({ ...content, about: { ...content.about, backgroundImage: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">About görsel yükle</span>
                <input type="file" accept="image/*" onChange={(event) => void handleImageUpload(event, (dataUrl) => setContent({ ...content, about: { ...content.about, backgroundImage: dataUrl } }))} className="block w-full text-sm text-brand-gray file:mr-4 file:rounded-xl file:border-0 file:bg-brand-red file:px-4 file:py-2 file:font-semibold file:text-white" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Başlık ön eki</span>
                <input value={content.about.titlePrefix} onChange={(event) => setContent({ ...content, about: { ...content.about, titlePrefix: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Başlık son eki</span>
                <input value={content.about.titleSuffix} onChange={(event) => setContent({ ...content, about: { ...content.about, titleSuffix: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Vurgu 1</span>
                <input value={content.about.titleHighlightOne} onChange={(event) => setContent({ ...content, about: { ...content.about, titleHighlightOne: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Vurgu 2</span>
                <input value={content.about.titleHighlightTwo} onChange={(event) => setContent({ ...content, about: { ...content.about, titleHighlightTwo: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">Paragraf 1</span>
                <textarea value={content.about.paragraphOne} onChange={(event) => setContent({ ...content, about: { ...content.about, paragraphOne: event.target.value } })} rows={5} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">Paragraf 2</span>
                <textarea value={content.about.paragraphTwo} onChange={(event) => setContent({ ...content, about: { ...content.about, paragraphTwo: event.target.value } })} rows={5} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-black">Çalışmalarımız sayfası</h2>
              <button
                onClick={() => setContent({
                  ...content,
                  works: {
                    ...content.works,
                    items: [
                      ...content.works.items,
                      {
                        id: `work-${Date.now()}`,
                        title: 'Yeni çalışma',
                        description: 'Açıklama girin.',
                        image: `${baseUrl}images/logo.png`,
                        status: 'Yeni',
                      },
                    ],
                  },
                })}
                className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-brand-red hover:bg-white/5"
              >
                Kart Ekle
              </button>
            </div>
            <div className="mt-6 grid gap-4">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Üst etiket</span>
                <input value={content.works.eyebrow} onChange={(event) => setContent({ ...content, works: { ...content.works, eyebrow: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Ana başlık</span>
                <input value={content.works.title} onChange={(event) => setContent({ ...content, works: { ...content.works, title: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Açıklama</span>
                <textarea value={content.works.description} onChange={(event) => setContent({ ...content, works: { ...content.works, description: event.target.value } })} rows={4} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Alt CTA başlığı</span>
                <input value={content.works.ctaTitle} onChange={(event) => setContent({ ...content, works: { ...content.works, ctaTitle: event.target.value } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Alt CTA açıklaması</span>
                <textarea value={content.works.ctaDescription} onChange={(event) => setContent({ ...content, works: { ...content.works, ctaDescription: event.target.value } })} rows={4} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>

              {content.works.items.map((item, index) => (
                <div key={item.id} className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-bold">Kart {index + 1}</h3>
                    <button
                      onClick={() => setContent({
                        ...content,
                        works: {
                          ...content.works,
                          items: content.works.items.filter((workItem) => workItem.id !== item.id),
                        },
                      })}
                      className="rounded-xl border border-brand-red/25 px-3 py-2 text-sm font-semibold text-brand-red transition-all hover:bg-brand-red/10"
                    >
                      Sil
                    </button>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold">Başlık</span>
                      <input value={item.title} onChange={(event) => setContent({ ...content, works: { ...content.works, items: updateWorkItem(content.works.items, item.id, { title: event.target.value }) } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold">Durum etiketi</span>
                      <input value={item.status} onChange={(event) => setContent({ ...content, works: { ...content.works, items: updateWorkItem(content.works.items, item.id, { status: event.target.value }) } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="mb-2 block text-sm font-semibold">Açıklama</span>
                      <textarea value={item.description} onChange={(event) => setContent({ ...content, works: { ...content.works, items: updateWorkItem(content.works.items, item.id, { description: event.target.value }) } })} rows={4} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="mb-2 block text-sm font-semibold">Görsel URL</span>
                      <input value={item.image} onChange={(event) => setContent({ ...content, works: { ...content.works, items: updateWorkItem(content.works.items, item.id, { image: event.target.value }) } })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="mb-2 block text-sm font-semibold">Görsel yükle</span>
                      <input type="file" accept="image/*" onChange={(event) => void handleImageUpload(event, (dataUrl) => setContent({ ...content, works: { ...content.works, items: updateWorkItem(content.works.items, item.id, { image: dataUrl }) } }))} className="block w-full text-sm text-brand-gray file:mr-4 file:rounded-xl file:border-0 file:bg-brand-red file:px-4 file:py-2 file:font-semibold file:text-white" />
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-black">Güvenlik</h2>
            <p className="mt-3 text-sm leading-7 text-brand-gray">Varsayılan şifre 12345. Buradan admin giriş şifresini değiştirebilirsin.</p>
            <form onSubmit={handlePasswordChange} className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Mevcut şifre</span>
                <input type="password" value={passwordForm.current} onChange={(event) => setPasswordForm({ ...passwordForm, current: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Yeni şifre</span>
                <input type="password" value={passwordForm.next} onChange={(event) => setPasswordForm({ ...passwordForm, next: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Yeni şifre tekrar</span>
                <input type="password" value={passwordForm.repeat} onChange={(event) => setPasswordForm({ ...passwordForm, repeat: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-brand-red" />
              </label>
              <button type="submit" className="w-full rounded-2xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition-all hover:border-brand-red hover:bg-white/5">Şifreyi Güncelle</button>
            </form>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-black">Kontroller</h2>
            <div className="mt-6 space-y-3">
              <button onClick={handleSave} className="w-full rounded-2xl bg-brand-red px-5 py-3 text-sm font-bold text-white transition-all hover:bg-brand-red-dark">Tüm Değişiklikleri Kaydet</button>
              <button onClick={handleReset} className="w-full rounded-2xl border border-white/15 px-5 py-3 text-sm font-bold text-white transition-all hover:border-brand-red hover:bg-white/5">Varsayılana Dön</button>
            </div>
            <p className="mt-4 text-sm leading-7 text-brand-gray">Bu panelde yapılan kaydetme işlemi artık sunucu tarafındaki SQLite veritabanına yazılır. Aynı backend’i kullanan herkes bu değişiklikleri görür.</p>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-black">Önizleme Linkleri</h2>
            <div className="mt-6 flex flex-col gap-3">
              <a href="./index.html#hero" className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition-all hover:border-brand-red hover:bg-white/5">Ana Sayfa Önizleme</a>
              <a href="./index.html?sayfa=calismalarimiz" className="rounded-2xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition-all hover:border-brand-red hover:bg-white/5">Çalışmalar Önizleme</a>
            </div>
            {statusMessage ? <p className="mt-4 text-sm leading-7 text-brand-red">{statusMessage}</p> : null}
          </div>
        </aside>
      </main>
    </div>
  );
}