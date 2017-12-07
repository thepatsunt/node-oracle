const controller = require("./controller");

function setup(router) {
  router
    .get("/show", controller.getAll)
    .get("/show/:id", controller.getId)
    .post("/create", controller.create)
    .put("/update/:id", controller.update)
    .delete("/delete/:id", controller.delete);
}
exports.setup = setup;
