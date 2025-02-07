import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const [user, setUser] = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );
    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen p-7 font-UberMoveMedium flex flex-col justify-between">
      <div>
        <h1 className="text-4xl mb-10">AutoLink</h1>

        <form action="" onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-xl mb-2">Enter email:</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-white rounded-md mb-7 px-4 py-2 border-2 border-gray-300 w-full text-lg placeholder:text-lg"
            required
            placeholder="Enter email"
          />

          <h3 className="text-xl mb-2">Enter Password:</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-white rounded-md mb-7 px-4 py-2 border-2 border-gray-300 w-full text-lg placeholder:text-lg"
            required
            placeholder="Enter password"
          />

          <button className="bg-black rounded mb-2 px-4 py-2 w-full text-lg text-white">
            Login
          </button>
        </form>
        <p className="text-center">
          New here ?{" "}
          <Link className="text-blue-500" to="/signup">
            Create an account
          </Link>
        </p>
      </div>
      <div>
        <Link
         className="flex items-center justify-center bg-yellow-500 rounded mb-7 px-4 py-2 text-lg text-black"
          to="/captain-login"
        >
          Login as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
