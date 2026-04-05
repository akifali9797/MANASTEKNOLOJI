# Deployment

Bu proje artık statik GitHub Pages yerine Node.js destekleyen bir ortamda yayınlanmalıdır.

## Mimari

- Frontend: Vite ile derlenmiş React uygulaması
- Backend: Express API
- Kalıcı veri: SQLite
- Kalıcı dosya yükleme: sunucu diski (`STORAGE_DIR`)

## Yerel Çalıştırma

1. `npm install`
2. `npm run build`
3. `npm run start`

Admin paneli:

- `http://localhost:8787/index.html?sayfa=admin`

Varsayılan şifre:

- `12345`

## Render ile Deploy

Repo kökünde hazır bir `render.yaml` dosyası vardır.

Render üzerinde yapılacaklar:

1. Repo'yu Render'a bağla.
2. Blueprint veya web service olarak `render.yaml` ile oluştur.
3. İlk deploy sonrasında servis URL'si üzerinden admin paneline gir.
4. Gerekirse özel domain bağla.

Notlar:

- SQLite ve yüklenen dosyaların kalıcı olması için persistent disk gereklidir.
- Bu yüzden servis planı `starter` olarak ayarlanmıştır; free plan persistent disk desteklemez.