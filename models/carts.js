const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  trips: { type: mongoose.Schema.Types.ObjectId, ref: "trips" },
  booking: Boolean,
});

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;
