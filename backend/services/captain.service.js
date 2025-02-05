const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  plate,
  capacity,
}) => {
  if (!firstname || !lastname || !email || !password || !plate || !capacity) {
    throw new Error("All fields are required");
  }

  const captain = await captainModel.create({
    fullname: { firstname, lastname },
    email,
    password,
    vehicle: { plate, capacity },
  });

  return captain;
};
