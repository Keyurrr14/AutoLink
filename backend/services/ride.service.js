const rideModel = require("../models/ride.model");
const mapService = require("./maps.service");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and Destination are required");
  }

  const distanceTime = await mapService.getDistanceTime(pickup, destination);
  //   const fare = distanceTime.distance * 0.01;
  //   return fare;

  const baseFare = 30;
  const perKmRate = 12;
  const perMinuteRate = 2;
  const distanceInKm = parseFloat(distanceTime.distance.replace(" km", ""));
  const durationInMin = parseInt(distanceTime.duration.replace(" mins", ""));
  const distanceFare = distanceInKm * perKmRate;
  const timeFare = durationInMin * perMinuteRate;
  const totalFare = baseFare + distanceFare + timeFare;
  return Math.round(totalFare);
}

module.exports.createRide = async ({ user, pickup, destination }) => {
  if (!user || !pickup || !destination) {
    throw new Error("All fields are required");
  }

  const fare = await getFare(pickup, destination);

  const ride = await rideModel.create({
    user,
    pickup,
    destination,
    fare,
  });

  return ride;
};
