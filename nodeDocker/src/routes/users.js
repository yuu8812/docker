var express = require('express');
var router = express.Router();

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost:3000',
//   user: 'foir075@gmail.com',
//   database: 'convinience',
// });

// connection.connect();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resources');
});

module.exports = router;
