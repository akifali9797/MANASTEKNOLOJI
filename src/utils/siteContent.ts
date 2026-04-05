import { useEffect, useMemo, useState } from 'react';

const CONTENT_UPDATED_EVENT = 'manas-site-content-updated';

export type WorksItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  status: string;
};

export type SiteContent = {
  hero: {
    backgroundImage: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine3: string;
    subtitle: string;
    secondaryButtonLabel: string;
  };
  about: {
    backgroundImage: string;
    titlePrefix: string;
    titleHighlightOne: string;
    titleHighlightTwo: string;
    titleSuffix: string;
    paragraphOne: string;
    paragraphTwo: string;
  };
  works: {
    eyebrow: string;
    title: string;
    description: string;
    ctaTitle: string;
    ctaDescription: string;
    items: WorksItem[];
  };
};

export function createDefaultContent(baseUrl: string): SiteContent {
  return {
    hero: {
      backgroundImage: `${baseUrl}images/hero-bg.jpg`,
      titleLine1: 'E-Spor Merkezleri &',
      titleHighlight: 'NetKafem sistemine',
      titleLine3: 'Kurumsal Çözümler',
      subtitle:
        'İnternet kafeler, e-spor salonları ve eğitim laboratuvarları için profesyonel disksiz sistem altyapısı ve network çözümleri sunuyoruz.',
      secondaryButtonLabel: 'Çalışmalarımız',
    },
    about: {
      backgroundImage: `${baseUrl}images/about-bg.jpg`,
      titlePrefix: "Türkiye'nin",
      titleHighlightOne: 'E-Spor',
      titleHighlightTwo: 'Disksiz Teknoloji',
      titleSuffix: 'Öncüsü',
      paragraphOne:
        'Manas Teknoloji 2007 yılında Ar-Ge amaçlı açtığı ilk internet kafesiyle sektöre giriş yapmıştır. Projeleriyle birçok başarılı girişimciye ilham kaynağı olmuş, internet kafeciliği daha modern hale getirmiş, sektörü ayakta tutacak dokunuşlar sayesinde yüzlerce insanı sektöre çekerek istihdam yaratmıştır.',
      paragraphTwo:
        "Türkiye'nin ilk yiyecek ve içecek ağırlıklı internet kafesini 2009 yılında açarak ayda yaklaşık 100.000 dolar ciroyla sektöre olan bakış açısını değiştirmeyi başarmıştır. Bu minvalde kurumsal işletmeler, e-spor salonları ve üniversitelerde disksiz sistem kurulumları ile dizi, film ve program arşivi desteği sunmaya devam etmektedir.",
    },
    works: {
      eyebrow: 'Çalışmalarımız',
      title: 'Tamamladığımız projeleri bu alanda sergileyeceğiz.',
      description:
        'Bu sayfa artık hazır. E-spor merkezi kurulumları, disksiz sistem projeleri ve kurumsal teknoloji dönüşümlerini burada tek tek ekleyebiliriz.',
      ctaTitle: 'İlk işleri birlikte yerleştirelim',
      ctaDescription:
        'Hazır olduğunda her proje için görsel, kısa açıklama, kullanılan teknoloji ve sonuç başlıklarıyla bu sayfayı gerçek referans sayfasına dönüştüreceğim.',
      items: [
        {
          id: 'espor-merkezleri',
          title: 'E-Spor Merkezleri',
          description: 'Kurulumunu yaptığımız salonlar, altyapı tasarımları ve uygulama detayları burada yer alacak.',
          image: `${baseUrl}images/hero-bg.jpg`,
          status: 'Yakında',
        },
        {
          id: 'disksiz-sistemler',
          title: 'Disksiz Sistem Projeleri',
          description: 'PXE, merkezi imaj, performans optimizasyonu ve ölçeklenebilir yönetim projelerini ekleyeceğiz.',
          image: `${baseUrl}images/about-bg.jpg`,
          status: 'Yakında',
        },
        {
          id: 'kurumsal-donusum',
          title: 'Kurumsal Dönüşüm İşleri',
          description: 'Üniversite, laboratuvar ve işletmeler için tamamladığımız dönüşüm örneklerini bu alanda paylaşacağız.',
          image: `${baseUrl}images/logo.png`,
          status: 'Yakında',
        },
      ],
    },
  };
}

function normalizeContent(content: Partial<SiteContent> | null | undefined, baseUrl: string): SiteContent {
  const defaults = createDefaultContent(baseUrl);

  return {
    hero: {
      ...defaults.hero,
      ...(content?.hero ?? {}),
    },
    about: {
      ...defaults.about,
      ...(content?.about ?? {}),
    },
    works: {
      ...defaults.works,
      ...(content?.works ?? {}),
      items: Array.isArray(content?.works?.items) && content?.works?.items.length > 0
        ? content.works.items.map((item, index) => ({
            id: item.id || `work-${index + 1}`,
            title: item.title || defaults.works.items[0].title,
            description: item.description || '',
            image: item.image || defaults.works.items[index % defaults.works.items.length].image,
            status: item.status || 'Yakında',
          }))
        : defaults.works.items,
    },
  };
}

export async function loadSiteContent(baseUrl: string): Promise<SiteContent> {
  try {
    const response = await fetch('/api/content');

    if (!response.ok) {
      throw new Error('İçerik yüklenemedi.');
    }

    const content = (await response.json()) as Partial<SiteContent>;
    return normalizeContent(content, baseUrl);
  } catch {
    return createDefaultContent(baseUrl);
  }
}

function dispatchContentUpdated() {
  window.dispatchEvent(new CustomEvent(CONTENT_UPDATED_EVENT));
}

export async function saveSiteContent(password: string, content: SiteContent) {
  const response = await fetch('/api/admin/content', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, content }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Kaydetme işlemi başarısız.' }));
    throw new Error(error.message || 'Kaydetme işlemi başarısız.');
  }

  dispatchContentUpdated();
}

export async function loginAdmin(password: string) {
  const response = await fetch('/api/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Giriş başarısız.' }));
    throw new Error(error.message || 'Giriş başarısız.');
  }
}

export async function saveAdminPassword(currentPassword: string, newPassword: string) {
  const response = await fetch('/api/admin/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ currentPassword, newPassword }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Şifre güncellenemedi.' }));
    throw new Error(error.message || 'Şifre güncellenemedi.');
  }
}

export async function uploadAdminFile(password: string, file: File) {
  const formData = new FormData();
  formData.append('password', password);
  formData.append('file', file);

  const response = await fetch('/api/admin/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Dosya yüklenemedi.' }));
    throw new Error(error.message || 'Dosya yüklenemedi.');
  }

  const result = (await response.json()) as { url: string };
  return result.url;
}

export function useSiteContent() {
  const baseUrl = useMemo(() => import.meta.env.BASE_URL, []);
  const [content, setContent] = useState<SiteContent>(() => createDefaultContent(baseUrl));

  useEffect(() => {
    const sync = async () => {
      setContent(await loadSiteContent(baseUrl));
    };

    void sync();
    window.addEventListener(CONTENT_UPDATED_EVENT, sync);

    return () => {
      window.removeEventListener(CONTENT_UPDATED_EVENT, sync);
    };
  }, [baseUrl]);

  return {
    baseUrl,
    content,
    refreshContent: async () => setContent(await loadSiteContent(baseUrl)),
  };
}