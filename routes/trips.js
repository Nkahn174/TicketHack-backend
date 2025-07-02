var express = require("express");
var router = express.Router();
const moment = require("moment");

const Trip = require("../models/trips");

router.post("/", (req, res) => {
  
  const { departure, arrival, date } = req.body;
  console.log(date)
  Trip.find({
    departure : {$regex: departure, $options: 'i'},
    arrival : {$regex: arrival, $options: 'i'},
    date: { $gte: moment(date), $lte: moment(date).add(1, "days") }, //gte : fonction mongoose qui permet de rechercher >= (lte = less ou egal)
  }).then((data) => {
    if (data.length > 0) {
      res.json({ tripsfound: data, result: true });
    } else res.json({ result: false });
  });
});

module.exports = router;
