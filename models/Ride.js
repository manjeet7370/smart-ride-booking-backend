const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  startTime: Date,
  endTime: Date,
  status: {
    type: String,
    enum: ["ongoing", "completed"],
    default: "ongoing"
  }
}, { timestamps: true });

module.exports = mongoose.model("Ride", rideSchema);