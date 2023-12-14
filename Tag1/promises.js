const fs = require('fs');

function leseDateiInhalt(dateipfad) {
  return new Promise((resolve, reject) => {
    fs.readFile(dateipfad, 'utf8', (error, daten) => {
      if (error) {
        reject(error); 
      } else {
        resolve(daten); 
      }
    });
  });
}

leseDateiInhalt('promisesTest.txt')
  .then(inhalt => {
    console.log('Die Länge des Dateiinhalts beträgt:', inhalt.length);
  })
  .catch(err => {
    console.error('Fehler beim Lesen der Datei:', err);
  });
