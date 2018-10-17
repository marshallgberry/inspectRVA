const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    
    updatedAt: {
      type: Number,
      required: false
    }
  },
  { runSettersOnQuery: true }
);

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;