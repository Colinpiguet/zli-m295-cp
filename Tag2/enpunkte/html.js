const express = require('express');
const path = require('path');
const app = express();

const htmlFilePath = path.join(__dirname, 'public', 'index.html');

app.get('/html', (req, res) => {
  res.sendFile(htmlFilePath);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
