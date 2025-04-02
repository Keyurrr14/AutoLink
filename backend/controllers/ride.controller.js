const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");
const mapsService = require("../services/maps.service");
const { sendMessageToSocketId } = require("../socket");

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId, pickup, destination } = req.body;

  try {
    const ride = await rideService.createRide({
      user: req.user._id,
      pickup,
      destination,
    });

    const pickupCoordinates = await mapsService.getAddressCoordinate(pickup);
    console.log("Pickup:", pickupCoordinates);

    const captainsInRadius = await mapsService.getCaptainsInTheRadius(
      pickupCoordinates.latitude,
      pickupCoordinates.longitude,
      2
    );
    console.log("Captains:", captainsInRadius);
    captainsInRadius.map((captain) => {
      sendMessageToSocketId(captain.socketId, {
        event: "new-ride",
        data: ride,
      });
    });
    res.status(201).json(ride);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
