# Product Requirements Document (PRD)

# PixelForge — Text-to-Image Generator

**Versi:** 1.0 · **Status:** Draft · **Platform:** Web App (Vue.js)

---

## 1. Goal

**Tujuan produk PixelForge hanya satu:**
Membuat pengguna bisa **mengetik deskripsi dalam bentuk teks, lalu mendapatkan gambar yang sesuai** — dengan cara yang mudah dipahami siapa saja, tanpa perlu belajar apa-apa dulu.

Setiap keputusan di PRD ini kembali ke satu pertanyaan:

> _"Apakah ini membuat proses menulis teks → melihat gambar jadi lebih mudah?"_

---

## 2. User Goal

| Yang diinginkan user                                                | Artinya bagi produk                                              |
| ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| "Saya mau gambar ini ada, dari kata-kata saya"                      | Input teks harus jadi satu-satunya hal yang perlu dilakukan user |
| "Saya nggak mau bingung caranya"                                    | Tidak ada langkah tambahan sebelum bisa generate gambar pertama  |
| "Saya mau tahu progresnya, jangan diam aja"                         | Ada status jelas selama proses berlangsung                       |
| "Kalau hasilnya kurang pas, saya mau bisa coba lagi dengan gampang" | Ubah teks & generate ulang harus semudah generate pertama kali   |

---

## 3. User Flow

```
1. User buka aplikasi
2. User melihat satu kotak: "Tulis apa yang ingin kamu lihat..."
3. User mengetik deskripsi
4. User tekan "Buat Gambar"
5. Muncul status: "Sedang menggambar untukmu..."
6. Gambar hasil muncul
7. User bisa: unduh gambar, atau ubah teks & coba lagi
```

Tidak ada langkah lain di luar alur ini. Satu tujuan, satu jalan lurus.

---

## 4. Requirements (Semua Mengarah ke Kemudahan Generate Gambar dari Teks)

| ID   | Requirement                                                                                         | Kenapa (alasan user-friendly)                                  |
| ---- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| R-01 | Kotak input teks langsung terlihat saat halaman dibuka, tanpa perlu klik apapun dulu                | User langsung tahu apa yang harus dilakukan                    |
| R-02 | Input punya contoh/placeholder teks                                                                 | Membantu user yang bingung mau menulis apa                     |
| R-03 | Tombol aksi berlabel jelas: **"Buat Gambar"**                                                       | Bahasa manusia, bukan istilah teknis                           |
| R-04 | Tombol nonaktif kalau teks kosong                                                                   | Mencegah kebingungan tanpa perlu error rumit                   |
| R-05 | Saat proses berjalan, muncul status yang menenangkan: _"Sedang menggambar untukmu..."_              | User tahu sistem sedang bekerja, bukan macet                   |
| R-06 | Tombol tidak bisa diklik berkali-kali saat masih proses                                             | Mencegah bingung/duplikasi tanpa sengaja                       |
| R-07 | Gambar hasil ditampilkan besar & jelas begitu selesai                                               | Fokus user langsung ke hasil akhir                             |
| R-08 | Ada tombol "Unduh Gambar" yang mudah ditemukan                                                      | Tujuan akhir user adalah memiliki gambarnya                    |
| R-09 | Ada tombol "Coba Lagi" untuk mengubah teks & generate ulang tanpa reload halaman                    | Mendukung eksperimen cepat                                     |
| R-10 | Kalau gagal, tampilkan pesan manusiawi + solusi, misal: _"Coba tulis deskripsi yang lebih singkat"_ | User tahu apa yang harus dilakukan, bukan sekadar tahu "error" |

---

## 5. Prinsip yang Menjaga Fokus Ini

1. **Satu layar, satu tujuan** — tidak ada elemen yang mengalihkan dari alur: tulis → tunggu → lihat hasil.
2. **Bahasa manusia** — semua teks di aplikasi terasa seperti aplikasi sedang "bicara" ke user, bukan bahasa developer.
3. **Tidak ada langkah tersembunyi** — user tidak perlu mengatur apapun sebelum bisa mencoba generate gambar pertamanya.
4. **Selalu ada jalan untuk mencoba lagi** — kegagalan atau hasil kurang pas harus mudah diperbaiki, bukan jalan buntu.

---

## 6. Definisi Selesai (Definition of Done)

Fitur text-to-image dianggap berhasil memenuhi goal produk jika:

- User baru bisa menghasilkan gambar pertamanya **tanpa bertanya "ini caranya gimana?"**
- User tahu **kapan proses selesai** tanpa harus menebak-nebak.
- User bisa **mengulang percobaan** dengan mudah kalau hasil kurang sesuai.
- Tidak ada istilah teknis yang membingungkan muncul di layar user.

---

## 7. Stuktur Proyek

pixelforge/
├── public/
│ └── favicon.ico
├── src/
│ ├── assets/
│ │ └── styles/
│ │ └── main.css
│ ├── components/
│ │ ├── PromptBox.vue
│ │ ├── GenerateButton.vue
│ │ ├── LoadingState.vue
│ │ ├── ResultImage.vue
│ │ ├── ErrorMessage.vue
│ │ └── HistoryGallery.vue
│ ├── stores/
│ │ └── imageStore.js
│ ├── services/
│ │ └── generateApi.js
│ ├── App.vue
│ └── main.js
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js

_Dokumen ini fokus sepenuhnya pada satu tujuan: memudahkan user mengubah teks menjadi gambar._
