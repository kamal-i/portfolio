# Portofolio — Ahmad Nur Kamali

Website portofolio statis (HTML/CSS/JS murni, tanpa build tool) bertema
**Pendidikan Akidah Akhlak** yang dipadukan dengan **Instructional Design**.
Identitas visual memakai ikon topi toga dari logo asli, dipasangkan dengan
namemark teks elegan **"A. N. Kamali"** dan tagline "pendidik & perancang
belajar" — dirender sebagai teks asli (bukan gambar) memakai tipografi
situs, sehingga tetap tajam di semua ukuran layar dan ramah SEO.

## Struktur folder

```
├── index.html          Halaman utama
├── 404.html             Halaman error kustom
├── css/styles.css       Seluruh gaya (design system, warna, tipografi)
├── js/main.js            Menu mobile, akordeon karya, tahun footer otomatis
├── images/                Logo, favicon, ikon, gambar OG
├── site.webmanifest       Metadata PWA ringan
├── robots.txt              Petunjuk crawler
└── sitemap.xml              Peta situs untuk mesin pencari
```

## Sebelum dipublikasikan — ganti bagian berikut

1. **URL situs.** Cari-dan-ganti `https://username.github.io/portofolio-ahmad/`
   di `index.html`, `404.html`, `robots.txt`, dan `sitemap.xml` dengan URL
   GitHub Pages Anda yang sebenarnya (atau domain kustom jika ada).
2. **Kontak.** Di `index.html`, bagian `#kontak`, ganti:
   - `email.anda@example.com` dengan alamat email Anda.
   - `https://wa.me/6280000000000` dengan nomor WhatsApp Anda (format
     internasional tanpa tanda `+`).
3. **Tautan sosial (opsional).** Tambahkan link LinkedIn/Instagram/GitHub
   di navigasi footer bila diperlukan, dan isi `sameAs` pada blok
   JSON-LD di `<head>` agar mesin pencari mengenali profil Anda di
   platform lain.
4. **Isi karya.** Bagian `#karya` berisi lima studi kasus dari pekerjaan
   yang sudah dilakukan — silakan sunting, tambah, atau lampirkan tautan
   nyata (mis. tautan Google Drive publik) bila tersedia.

## Menjalankan secara lokal

Situs ini murni statis, jadi cukup buka `index.html` di peramban. Untuk
pratinjau dengan server lokal (disarankan agar path relatif bekerja normal):

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `portofolio-ahmad`.
2. Unggah seluruh isi folder ini ke repository tersebut (root repository,
   bukan di dalam subfolder), lalu commit & push:
   ```bash
   git init
   git add .
   git commit -m "Situs portofolio awal"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portofolio-ahmad.git
   git push -u origin main
   ```
3. Di GitHub: buka **Settings → Pages**.
4. Pada **Source**, pilih branch `main` dan folder `/ (root)`, lalu **Save**.
5. Tunggu satu-dua menit — situs akan tersedia di
   `https://USERNAME.github.io/portofolio-ahmad/`.
6. (Opsional) Jika memakai domain sendiri, tambahkan file `CNAME` berisi
   nama domain Anda, lalu atur DNS sesuai panduan GitHub Pages.

## Catatan desain

- **Warna**: merah crimson `#F50C43` dari logo dipakai sebagai aksen saja
  (tombol, tautan aktif, penanda), latar utama krem hangat `#FAF8F4`
  dengan teks nyaris-hitam `#17161B` agar tetap nyaman dibaca dan
  profesional — bukan warna cerah yang penuh di semua tempat.
- **Tipografi**: *Literata* (serif) untuk judul agar terasa hangat dan
  akademis, *IBM Plex Sans* untuk teks isi, dan *IBM Plex Mono* untuk
  label kecil (metadata, tag) — memberi kesan sistematis yang sesuai
  dengan tema instructional design.
- **Motif bintang delapan** pada hero adalah elemen garis tipis yang
  merujuk pada pola geometris Islam secara halus, tanpa berlebihan.
- Struktur HTML sudah semantik, dapat diakses (fokus keyboard terlihat,
  navigasi ARIA, `prefers-reduced-motion` dihormati), serta dilengkapi
  metadata SEO (Open Graph, Twitter Card, JSON-LD `Person`, sitemap,
  robots.txt) sehingga siap diindeks mesin pencari.
