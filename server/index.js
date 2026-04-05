import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import express from 'express';
import multer from 'multer';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const storageDir = process.env.STORAGE_DIR
  ? path.resolve(process.env.STORAGE_DIR)
  : path.join(rootDir, 'server-data');
const dataDir = path.join(storageDir, 'data');
const uploadsDir = path.join(storageDir, 'uploads');
const distDir = path.join(rootDir, 'dist');
const port = Number(process.env.PORT || 8787);

fs.mkdirSync(storageDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(uploadsDir, { recursive: true });

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadsDir),
    filename: (_req, file, cb) => {
      const safeName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '-').toLowerCase();
      cb(null, `${Date.now()}-${safeName}`);
    },
  }),
  limits: { fileSize: 8 * 1024 * 1024 },
});

function createDefaultContent(baseUrl = '/') {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  return {
    hero: {
      backgroundImage: `${normalizedBase}images/hero-bg.jpg`,
      titleLine1: 'E-Spor Merkezleri &',
      titleHighlight: 'NetKafem sistemine',
      titleLine3: 'Kurumsal Çözümler',
      subtitle:
        'İnternet kafeler, e-spor salonları ve eğitim laboratuvarları için profesyonel disksiz sistem altyapısı ve network çözümleri sunuyoruz.',
      secondaryButtonLabel: 'Çalışmalarımız',
    },
    about: {
      backgroundImage: `${normalizedBase}images/about-bg.jpg`,
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
          image: `${normalizedBase}images/hero-bg.jpg`,
          status: 'Yakında',
        },
        {
          id: 'disksiz-sistemler',
          title: 'Disksiz Sistem Projeleri',
          description: 'PXE, merkezi imaj, performans optimizasyonu ve ölçeklenebilir yönetim projelerini ekleyeceğiz.',
          image: `${normalizedBase}images/about-bg.jpg`,
          status: 'Yakında',
        },
        {
          id: 'kurumsal-donusum',
          title: 'Kurumsal Dönüşüm İşleri',
          description: 'Üniversite, laboratuvar ve işletmeler için tamamladığımız dönüşüm örneklerini bu alanda paylaşacağız.',
          image: `${normalizedBase}images/logo.png`,
          status: 'Yakında',
        },
      ],
    },
  };
}

async function initDatabase() {
  const db = await open({
    filename: path.join(dataDir, 'site.db'),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);

  const passwordSetting = await db.get('SELECT value FROM settings WHERE key = ?', 'admin_password_hash');

  if (!passwordSetting) {
    const defaultHash = await bcrypt.hash('12345', 10);
    await db.run('INSERT INTO settings (key, value) VALUES (?, ?)', 'admin_password_hash', defaultHash);
  }

  const contentSetting = await db.get('SELECT value FROM settings WHERE key = ?', 'site_content');

  if (!contentSetting) {
    await db.run('INSERT INTO settings (key, value) VALUES (?, ?)', 'site_content', JSON.stringify(createDefaultContent('/')));
  }

  return db;
}

function createServer(db) {
  const app = express();

  app.use(cors());
  app.use(express.json({ limit: '10mb' }));
  app.use('/uploads', express.static(uploadsDir));

  app.get('/api/content', async (_req, res) => {
    const setting = await db.get('SELECT value FROM settings WHERE key = ?', 'site_content');
    res.json(JSON.parse(setting?.value || JSON.stringify(createDefaultContent('/'))));
  });

  app.post('/api/admin/login', async (req, res) => {
    const { password } = req.body ?? {};
    const setting = await db.get('SELECT value FROM settings WHERE key = ?', 'admin_password_hash');

    if (!password || !setting || !(await bcrypt.compare(password, setting.value))) {
      return res.status(401).json({ message: 'Şifre yanlış.' });
    }

    return res.json({ success: true });
  });

  app.post('/api/admin/password', async (req, res) => {
    const { currentPassword, newPassword } = req.body ?? {};
    const setting = await db.get('SELECT value FROM settings WHERE key = ?', 'admin_password_hash');

    if (!currentPassword || !newPassword || !setting || !(await bcrypt.compare(currentPassword, setting.value))) {
      return res.status(401).json({ message: 'Mevcut şifre doğrulanamadı.' });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    await db.run('UPDATE settings SET value = ? WHERE key = ?', hashed, 'admin_password_hash');
    return res.json({ success: true });
  });

  app.put('/api/admin/content', async (req, res) => {
    const { password, content } = req.body ?? {};
    const setting = await db.get('SELECT value FROM settings WHERE key = ?', 'admin_password_hash');

    if (!password || !content || !setting || !(await bcrypt.compare(password, setting.value))) {
      return res.status(401).json({ message: 'Yetkisiz işlem.' });
    }

    await db.run('UPDATE settings SET value = ? WHERE key = ?', JSON.stringify(content), 'site_content');
    return res.json({ success: true });
  });

  app.post('/api/admin/upload', upload.single('file'), async (req, res) => {
    const password = req.body?.password;
    const setting = await db.get('SELECT value FROM settings WHERE key = ?', 'admin_password_hash');

    if (!password || !setting || !(await bcrypt.compare(password, setting.value))) {
      return res.status(401).json({ message: 'Yetkisiz işlem.' });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'Dosya bulunamadı.' });
    }

    return res.json({ url: `/uploads/${req.file.filename}` });
  });

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });

  if (fs.existsSync(distDir)) {
    app.use(express.static(distDir));
    app.use((_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  return app;
}

const db = await initDatabase();
const app = createServer(db);

app.listen(port, () => {
  console.log(`Admin API ready on http://localhost:${port}`);
});