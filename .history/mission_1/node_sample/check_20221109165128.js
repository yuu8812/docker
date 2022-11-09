const request = require('request');

var URL = 'URL_IS_HERE';

request.get(
  {
    uri: URL,
    headers: { 'Content-type': 'application/json' },
    qs: {
      // GETのURLの後に付く
      // ?hoge=hugaの部分
    },
    json: true,
  },
  function (err, req, data) {
    console.log(data);
  }
);

const request = require('request');

var URL = 'URL_IS_HERE';

request.post(
  {
    uri: URL,
    headers: { 'Content-type': 'application/json' },
    json: {
      // JSONをPOSTする場合書く
    },
  },
  (err, res, data) => {
    console.log(data);
  }
);
