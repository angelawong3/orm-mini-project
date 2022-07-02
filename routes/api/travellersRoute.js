const router = require("express");

router.get("/", (req, res) => {
  res.send("Works!");
});

module.exports = travellersRouter;
