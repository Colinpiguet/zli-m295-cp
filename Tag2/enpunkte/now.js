const express = require('express');
const app = express();

app.get('/now', (req, res) => {
  const currentTime = new Date();
  res.status(200).json({ currentTime: currentTime.toISOString() });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});