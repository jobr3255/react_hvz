var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'cuhvmiwg',
  password: 'Yummybrainz!2',
  database: 'cuhvmiwg_hvz'
});
// connection.connect()
// connection.end()

const STATUS = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict"
};

function sqlError(res, status, err){
  let errCode = "[" + err.code + "]";
  let sqlMsg = " - " + err.sqlMessage;
  res.status(status).json({
    status: status,
    error: {
      message: errCode + sqlMsg,
      code: STATUS[status],
      sqlQuery: err.sql
    }
  });
}

function sendError(res, status, errorText){
  res.status(status).json({
    status: status,
    error: {
      message: errorText,
      code: STATUS[status]
    }
  });
}

function sendResponse(res, status, data){
  // res.status(status).json
  res.status(status).json({
    data: data,
    status: status
  });
}

var Database = function(){};
Database.query = function (queryText, res, errorText = "No results found") {
  connection.query(queryText, function (err, data, fields) {
    if (err) {
      console.log(err);
      sqlError(res, 400, err);
      return;
    }
    if(data.length == 0){
      sendError(res, 404, errorText);
      return;
    }
    sendResponse(res, 200, data);
  })
};

Database.queryFetchSingle = function (queryText, res, errorText = "No results found") {
  connection.query(queryText, function (err, data, fields) {
    if (err) {
      console.log(err);
      sqlError(res, 400, err);
      return;
    }
    if(data.length == 0){
      sendError(res, 404, errorText);
      return;
    }
    sendResponse(res, 200, data[0]);
  })
};

module.exports = Database;
