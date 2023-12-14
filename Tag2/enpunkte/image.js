const express = require('express');
const path = require('path'); 
const app = express();

const imagePath = path.join(__dirname, 'workspaces', 'zli-m295-cp', 'Tag2', 'enpunkte', 'images', 'Download.png');

app.get('/image', (req, res) => {
  res.sendFile(imagePath);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
