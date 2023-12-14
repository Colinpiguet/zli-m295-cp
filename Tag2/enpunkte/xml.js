const express = require('express');
const path = require('path'); 
const app = express();

const xmlPath = path.join(__dirname, 'workspaces', 'zli-m295-cp', 'Tag2', 'enpunkte', 'test.xml');

app.get('/xml', (req, res) => {
  res.sendFile(xmlPath);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
