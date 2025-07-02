var express = require("express");
var router = express.Router();
const moment = require("moment");

const Cart = require("../models/carts");
const Trip = require("../models/trips");

router.post("/trips", (req, res) => {
  Trip.findById(req.body.id).then(trip => {
    const now = moment();
    const tripDate = moment(trip.date);
    if(tripDate.isAfter(now)) {
      const newCart = new Cart({
        trips: req.body.id,
        booking: false,
      });
      newCart.save().then(() => res.json({ result: true }));
    } else {
      res.json({ result: false });
    }
  });
});

router.get("/trips", (req, res) => {
  Cart.find()
    .populate("trips")
    .then((data) => {
      if (data.length > 0) {
        res.json({ cart: data, result: true });
      } else {
        res.json({ result: false });
      }
    });
});

router.delete("/trips", (req, res) => {
  Cart.deleteOne({ _id: req.body.id })
  .then(() => res.json({ result: true }));
});


router.get("/booking/trips", (req, res) => {
  Cart.find({ booking: true }).populate('trips').then((data) => {
    if (data.length > 0) {
      res.json({ booked: data, result: true });
    } else {
      res.json({ result: false });
    }
  });
});


module.exports = router;

