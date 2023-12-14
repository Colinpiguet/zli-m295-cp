const { randomUUID } = require('crypto');
const express = require('express');
const app = express();
const nameArray = [
  'Anna',
  'Benjamin',
  'Clara',
  'David',
  'Eva',
  'Fabian',
  'Greta',
  'Hannes',
  'Isabella',
  'Jonas',
  'Klara',
  'Lukas',
  'Mia',
  'Niklas',
  'Olivia',
  'Paul',
  'Quentin',
  'Rosa',
  'Simon',
  'Tara'
];

app.get('/name', (req, res) => {
    const randomIndex = Math.floor(Math.random() * nameArray.length);
    const randomName = nameArray[randomIndex];
    res.send(randomName)
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});