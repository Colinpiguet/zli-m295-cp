const express = require('express');
const moment = require('moment-timezone');
const app = express();
const port = 3000;

const getCurrentTime = (timezone) => {
  const now = moment().tz(timezone);
  return now.format('YYYY-MM-DD HH:mm:ss');
};

app.get('/now', (request, response) => {
  const timezone = request.query.timezone || 'Europe/Zurich';
  const currentTime = getCurrentTime(timezone);
  response.send(`Current Time in ${timezone}: ${currentTime}`);
});

app.listen(port, () => {
  console.log(`Die App lauscht auf Port ${port}`);
});
