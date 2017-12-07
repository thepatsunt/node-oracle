const Model = require("../model");

module.exports.findAll = callback => {
  let sql = ` SELECT column FROM table_name `;

  Model.findAll(sql, data => {
    callback(data);
  });
};

module.exports.find = (req, callback) => {
  let { id } = req.params;
  let sql, value;
  sql = ` SELECT column1 FROM table_name WHERE condition = :id `;
  value = [id];

  Model.find(sql, value, data => {
    callback(data);
  });
};

module.exports.create = (req, callback) => {
  let { value1, value2, value3 } = req.body;
  let sql, value;
  sql = ` INSERT INTO table_name (column1,column2,column3) VALUES (:value1, :value2, :value3) `;
  value = [value1, value2, value3];

  Model.create(sql, value, data => {
    callback(data);
  });
};

module.exports.update = (req, callback) => {};

module.exports.delete = (req, callback) => {};
