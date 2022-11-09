var express = require('express');

var app = express();
app.get('/', (req, res) => {
  res.status(200).send('Express!! hahaah');
});

// ポート3000番でlistenする
app.listen(3000);
