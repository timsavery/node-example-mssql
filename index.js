var url = require('url');
var http = require('http');
var Query = require('./src/query');

var server = http.createServer(function (req, res) {
  var parts = url.parse(req.url);

  var match = parts.pathname.match(/\/log/);

  if (match) {
    var sql = 'select * from DatabaseLog';

    new Query(sql).pipe(res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8080, function () {
  console.log('listening on port 8080');
});
