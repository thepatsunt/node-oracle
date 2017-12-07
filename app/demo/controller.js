const model = require("./model");
const httpError = require("../http-error");

module.exports.getAll = (req, res, next) => {
  model.findAll(data => {
    res.json(data);
  });
};

module.exports.getId = (req, res, next) => {
  model.find(req, data => {
    res.json(data);
  });
};

module.exports.create = (req, res, next) => {
  model.create(req, data => {
    res.json(data);
  });
};

module.exports.update = (req, res, next) => {
  model.update(req, data => {
    res.json(data);
  });
};

module.exports.delete = (req, res, next) => {
  model.delete(req, data => {
    res.json(data);
  });
};
