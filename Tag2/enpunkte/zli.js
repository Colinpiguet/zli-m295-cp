const express = require('express');
const app = express();

app.get('/zli', (req, res) => {
    res.redirect('https://www.zli.ch/')
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});