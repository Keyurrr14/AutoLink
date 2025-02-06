import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  }

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

          <button className="bg-black rounded mb-2 px-4 py-2 w-full text-lg text-white">
            Login
          </button>
        </form>
        <p className="text-center">
          Already have an account ?{" "}
          <Link className="text-blue-500" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
