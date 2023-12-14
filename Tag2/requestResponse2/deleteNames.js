const express = require('express');

const app = express();
const port = 3000;

let namesList = [];

app.get('/names', (req, res) => {
  res.status(200).json({ names: namesList });
});

app.post('/names', (req, res) => {
  const newName = req.body.name;

  if (!newName) {
    return res.status(400).json({ error: 'Bitte geben Sie einen Namen ein.' });
  }

  namesList.push(newName);
  res.status(201).json({ message: 'Name erfolgreich hinzugefügt.', newName });
});

app.delete('/names', (req, res) => {
  const nameToRemove = req.query.name;

  if (!nameToRemove) {
    return res.status(400).json({ error: 'Bitte geben Sie einen zu löschenden Namen an.' });
  }

  const index = namesList.indexOf(nameToRemove);
  if (index === -1) {
    return res.status(404).json({ error: 'Der angegebene Name ist nicht in der Liste.' });
  }

  namesList.splice(index, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
