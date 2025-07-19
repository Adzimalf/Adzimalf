# 📖 Al-Qur'an API

Selamat datang di **Al-Qur'an API** — API sederhana yang menyajikan data Al-Qur'an dalam format JSON, dibangun dengan Node.js dan Express.js.

> 🎯 Cocok untuk digunakan di aplikasi Islami, website, chatbot, dan project pembelajaran.

---

## 🚀 Fitur

- ✅ Mendapatkan data per surah
- 🔍 Mencari ayat berdasarkan kata kunci
- 🌐 Siap di-deploy ke Railway atau Vercel
- 📦 100% berbasis JSON

---

## 📂 Struktur Project

```
quran-api/
├── index.js         # Kode utama API
├── package.json     # Metadata & dependency
├── quran.json       # Data lengkap Al-Qur'an (dalam Bahasa Indonesia)
└── README.md        # Dokumentasi proyek
```

---

## 📡 Endpoint API

### ➤ `GET /`
Cek apakah API aktif.

**Contoh:**

```
GET https://your-api.up.railway.app/
```

---

### ➤ `GET /surah/:id`
Ambil detail surah berdasarkan ID.

**Contoh:**

```
GET /surah/1
```

**Respon:**

```json
{
  "chapterInfo": {
    "id": 1,
    "name": "Al-Fatihah"
  },
  "verses": [
    {
      "text": "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
      "numberInSurah": 1
    }
  ]
}
```

---

### ➤ `GET /search?q=kata`
Cari semua ayat yang mengandung kata tertentu (dalam Bahasa Indonesia).

**Contoh:**

```
GET /search?q=rahman
```

**Respon:**

```json
{
  "query": "rahman",
  "hasil": [
    {
      "surah": "Al-Fatihah",
      "ayat": 1,
      "teks": "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang."
    }
  ]
}
```

---

## 🛠️ Cara Menjalankan di Lokal

```bash
# Install dependencies
npm install

# Jalankan server
node index.js
```

---

## ☁️ Deploy ke Railway

1. Login ke [Railway](https://railway.app)
2. Klik **New Project → Deploy from GitHub**
3. Pilih repo ini
4. Tunggu build selesai
5. Akses API di: `https://namaproject.up.railway.app`

---

## 👤 Author

**Adzim Al-Farizi**  
📧 Email: adzimalf@gmail.com  
🔗 GitHub: [@Adzimalf](https://github.com/Adzimalf)

---

## 📄 License

MIT — bebas digunakan untuk apa pun.
