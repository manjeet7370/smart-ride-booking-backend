const express = require("express");
const router = express.Router();
const Ride = require("../models/Ride");
const protect = require("../middleware/authMiddleware");

// 🚲 START RIDE
router.post("/start", protect, async (req, res, next) => {
  try {
    const ride = await Ride.create({
      user: req.user.id,
      startTime: new Date(),
      status: "ongoing"
    });

    res.status(201).json({
      success: true,
      ride
    });

  } catch (err) {
    next(err);
  }
});


// 🛑 END RIDE
router.post("/end/:id", protect, async (req, res, next) => {
  try {
    const ride = await Ride.findById(req.params.id);

    if (!ride) {
      res.status(404);
      throw new Error("Ride not found");
    }

    // ❗ security check (important)
    if (ride.user.toString() !== req.user.id) {
      res.status(403);
      throw new Error("Not authorized");
    }

    ride.endTime = new Date();
    ride.status = "completed";

    // 💰 simple fare logic
    const duration =
      (ride.endTime - ride.startTime) / (1000 * 60); // minutes

    ride.fare = Math.max(20, Math.floor(duration * 5));

    await ride.save();

    res.json({
      success: true,
      ride
    });

  } catch (err) {
    next(err);
  }
});


// 📜 HISTORY
router.get("/history", protect, async (req, res, next) => {
  try {
    const rides = await Ride.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      rides
    });

  } catch (err) {
    next(err);
  }
});

module.exports = router;