const express = require('express');
const app = express();
const port = 3000;
const request = require('request');

app.get('/plz/:plz', (req, res) => {
  let plz = req.params.plz;
  let urlApi = `https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${plz}`;

  request.get({
    url: urlApi,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, response, data) => {
    if (err) {
      console.log('Error:', err);
      res.send('Error fetching data');
    } else if (response.statusCode !== 200) {
      console.log('Status:', response.statusCode);
      res.send(`Status ${response.statusCode}: Unable to retrieve data for PLZ ${plz}`);
    } else {
      let temperature = data.currentWeather.temperature;
      res.send(`PLZ = ${plz},\nTemperature = ${temperature}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});





