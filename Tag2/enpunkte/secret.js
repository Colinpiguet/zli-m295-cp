const express = require('express');
const { STATUS_CODES } = require('http');
const app = express();

app.get('/secret', (req, res) => {
  res.sendStatus(403)
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});