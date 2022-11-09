var express = require('express');

var app = express();
app.get('/check', (req, res) => {
  res.status(200).send('Express!! ');
});
app.post('/check', (req, res) => {
  res.status(200).send('Express!! ');
});

// ポート3000番でlistenする
app.listen(80);
