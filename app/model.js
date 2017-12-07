const oracledb = require("oracledb");
const httpError = require("./http-error");
const config = require("../config.js");
const database = config.database;
oracledb.outFormat = oracledb.OBJECT;

module.exports.findAll = (sql, callback) => {
  oracledb
    .getConnection(database)
    .then(conn => {
      conn
        .execute(sql, {})
        .then(result => {
          if (result.rows.length === 0) {
            callback(httpError.error("", 404));
            doRelease(conn);
          } else {
            callback(result.rows);
            doRelease(conn);
          }
        })
        .catch(err => {
          callback(httpError.error(err, 502));
          doRelease(conn);
        });
    })
    .catch(err => {
      callback(httpError.error(err, 500));
    });
};

module.exports.find = (sql, value, callback) => {
  oracledb
    .getConnection(database)
    .then(conn => {
      conn
        .execute(sql, value, {})
        .then(result => {
          if (result.rows.length === 0) {
            callback(httpError.error("", 404));
            doRelease(conn);
          } else {
            callback(result.rows);
            doRelease(conn);
          }
        })
        .catch(err => {
          callback(httpError.error(err, 502));
          doRelease(conn);
        });
    })
    .catch(err => {
      callback(httpError.error(err, 500));
    });
};

module.exports.create = (sql, value, callback) => {
  oracledb
    .getConnection(database)
    .then(conn => {
      conn
        .execute(sql, value, { autoCommit: true })
        .then(result => {
          callback(httpError.error("", 201));
          doRelease(conn);
        })
        .catch(err => {
          callback(httpError.error(err, 400));
          doRelease(conn);
        });
    })
    .catch(err => {
      callback(httpError.error(err, 500));
    });
};

function doRelease(conn) {
  conn.close(err => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(" #### ❤ SUCCESS ❤ #### ");
    }
  });
}
