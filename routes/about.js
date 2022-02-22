var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("layout", {
    title: "About",
    paragraph: "This is the about page",
    link1: "home",
    link2: "contact",
  });
});

module.exports = router;
