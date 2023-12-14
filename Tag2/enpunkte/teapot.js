const express = require('express');
const { STATUS_CODES } = require('http');
const app = express();

app.get('/teapot', (req, res) => {
  res.status(418).send("Status 418, Client Error")
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
