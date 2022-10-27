var express = require("express");
var router = express.Router();

let cityList = [
  {
    name: "paris",
    status: "nuageux",
  },
  {
    name: "toulon",
    status: "nuageux",
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/weather", function (req, res, next) {
  res.render("weather", { cityList: cityList });
});
router.post("/addcity", function (req, res, next) {
  res.render("weather", { cityList: cityList });
});

module.exports = router;
