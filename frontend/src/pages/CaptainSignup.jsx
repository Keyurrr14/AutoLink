import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext.jsx";
import axios from "axios";


const CaptainSignup = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        plate: vehiclePlate,
        capacity: vehicleCapacity,
      },
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    } 
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehiclePlate("");
    setVehicleCapacity("");
  };

  return (
    <div className="h-screen p-7 font-UberMoveMedium flex flex-col justify-between">
      <div>
        <h1 className="text-4xl mb-10">AutoLink</h1>

        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-xl mb-2">Enter Name:</h3>
          <div className="flex gap-3">
            <input
              type="text"
              className="bg-zinc-200 rounded mb-7 px-4 py-2 border border-zinc-300 w-1/2 text-lg placeholder:text-md"
              required
              placeholder="Firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="bg-zinc-200 rounded mb-7 px-4 py-2 border border-zinc-300 w-1/2 text-lg placeholder:text-md"
              required
              placeholder="Lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-xl mb-2">Enter email:</h3>
          <input
            type="email"
            className="bg-zinc-200 rounded mb-7 px-4 py-2 border border-zinc-300 w-full text-lg placeholder:text-lg"
            required
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-xl mb-2">Enter Password:</h3>
          <input
            type="password"
            className="bg-zinc-200 rounded mb-7 px-4 py-2 border border-zinc-300 w-full text-lg placeholder:text-lg"
            required
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <h3 className="text-xl mb-2">Vehicle Information:</h3>
          <div className="flex gap-3">
            <input
              type="text"
              className="bg-zinc-200 rounded mb-7 px-4 py-2 border border-zinc-300 w-1/2 text-lg placeholder:text-md"
              required
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
            <input
              type="text"
              className="bg-zinc-200 rounded mb-7 px-4 py-2 border border-zinc-300 w-1/2 text-lg placeholder:text-md"
              required
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
          </div>

          <button className="bg-black rounded mb-2 px-4 py-2 w-full text-lg text-white">
            Register as Captain
          </button>
        </form>
        <p className="text-center">
          Already a captain ?{" "}
          <Link className="text-blue-500" to="/captain-login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
