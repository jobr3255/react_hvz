var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'cuhvmiwg',
  password: 'Yummybrainz!2',
  database: 'cuhvmiwg_hvz'
});

var Database = function(){};
Database.query = function (queryText, res) {
  // connection.connect()
  connection.query(queryText, function (err, data, fields) {
    if (err) {
      res.send(err);
      return;
    }
    res.send(data);
  })
  // connection.end()
};

module.exports = Database;
