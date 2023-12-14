const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

let namesList = [];

app.get('/names', (req, res) => {
  res.json({ names: namesList });
});

app.post('/names', (req, res) => {
  const newName = req.body.name;
  
  if (!newName) {
    return res.status(400).json({ error: 'Bitte geben Sie einen Namen ein.' });
  }

  namesList.push(newName);
  res.status(201).json({ message: 'Name erfolgreich hinzugefügt.', newName });
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

