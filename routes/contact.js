var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("layout", {
    title: "Contact",
    paragraph: "This is the contact page",
    link1: "home",
    link2: "about",
  });
});

module.exports = router;
