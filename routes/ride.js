const express = require("express");
const router = express.Router();
const Ride = require("../models/Ride");
const protect = require("../middleware/authMiddleware");


// START RIDE
router.post("/start", protect, async (req, res) => {
  const ride = await Ride.create({
    user: req.user.id,
    startTime: new Date()
  });

  res.json(ride);
});


// END RIDE
router.post("/end/:id", protect, async (req, res) => {
  const ride = await Ride.findById(req.params.id);

  ride.endTime = new Date();
  ride.status = "completed";

  await ride.save();

  res.json(ride);
});


// HISTORY
router.get("/history", protect, async (req, res) => {
  const rides = await Ride.find({ user: req.user.id });
  res.json(rides);
});

module.exports = router;