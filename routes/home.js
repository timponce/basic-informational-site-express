var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("layout", {
    title: "Home",
    paragraph: "This is the home page",
    link1: "about",
    link2: "contact",
  });
});

module.exports = router;
