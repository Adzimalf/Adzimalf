const express = require('express');
const app = express();
const data = require('./quran.json');

app.get('/', (req, res) => res.send('📖 API Al-Qur\'an'));

app.get('/surah/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const surah = data.find(s => s.chapterInfo.id === id);
  if (!surah) return res.status(404).json({ message: 'Surah tidak ditemukan' });
  res.json(surah);
});

app.get('/search', (req, res) => {
  const q = req.query.q?.toLowerCase();
  if (!q) return res.status(400).json({ message: 'Query kosong' });

  const hasil = [];
  data.forEach(surah => {
    surah.verses.forEach(ayat => {
      if (ayat.text.toLowerCase().includes(q)) {
        hasil.push({
          surah: surah.chapterInfo.name,
          ayat: ayat.numberInSurah,
          teks: ayat.text
        });
      }
    });
  });

  res.json({ query: q, hasil });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Listening on port ${PORT}`));
