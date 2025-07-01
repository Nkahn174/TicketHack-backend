var express = require("express");
var router = express.Router();
const moment = require("moment");

const Cart = require("../models/carts");

router.post("/trips", (req, res) => {
  const newCart = new Cart({
    trips: req.body.id,
    booking: false,
  });

  const now = moment().toDate();
  const departureDate = newCart.trips.date;

  if (departureDate > now) {
    return res.json({ result: false });
  } else {
    newCart
      .save()
      .then((data) => data.populate("trips"))
      .then((data) => res.json({ ajout: data, result: true }));
  }
});

router.get("/trips", (req, res) => {
  Cart.find({}).then((data) => {
    if (data.length > 0) {
      res.json({ cart: data, result: true });
    } else {
      res.json({ result: false });
    }
  });
});

router.delete("/trips", (req, res) => {
  Cart.deleteOne({ trips: req.body.id }).then(() => res.json({ result: true }));
});
module.exports = router;

router.get("/booking/trips", (req, res) => {
  Cart.find({ booking: true }).then((data) => {
    if (data.length > 0) {
      res.json({ booked: data, result: true });
    } else {
      res.json({ result: false });
    }
  });
});

// router.post('/:userId/tickets', async (req, res) => {
// try {
// const { ticketId } = req.body;
// const user = await User.findByIdAndUpdate(
// req.params.userId,
// { $push: { tickets: ticketId } },
// { new: true }
// );
// res.json(user);
// } catch (err) {
// res.status(500).json({ error: err.message });
// }
// });
