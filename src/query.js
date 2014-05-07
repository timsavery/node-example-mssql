var util = require('util');
var tds = require('tedious');
var stream = require('stream');

function Query(sql) {
  stream.Readable.call(this);

  this._sql = sql;
  this._reading = false;
}

util.inherits(Query, stream.Readable);

Query.prototype._read = function () {
  var self = this;

  if (self._reading) return;
  self._reading = true;

  var connection = new tds.Connection({
    server: '<SERVER>',
    userName: '<USERNAME>',
    password: '<PASSWORD>',
    options: {
      database: 'AdventureWorks2012',
      rowCollectionOnDone: false,
      rowCollectionOnRequestCompletion: false
    }
  });

  connection.on('connect', function (err) {
    if (err) {
      return self.emit('error', err);
    }

    var request = new tds.Request(self._sql, function(err, rowCount) {
      if (err) {
        return self.emit('error', err);
      }

      connection.close();

      self.push(null);

      self._reading = false;
    });

    request.on('row', function(columns) {
      // var row = {};
      //
      // columns.forEach(function(column) {
      //   if (column.value !== null) {
      //     row[column.metadata.colName] = column.value;
      //   }
      // });
      //
      // self.push(JSON.stringify(row));
    });

    connection.execSql(request);
  });
};

module.exports = Query;
