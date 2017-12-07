const config = require("../config.js");
const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
    res.render("index", {
        title: config.application.title,
        database: " Database server Oracle. ",
        version: config.application.version
    });
});

module.exports = router;