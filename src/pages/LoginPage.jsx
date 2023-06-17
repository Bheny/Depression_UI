import React, { useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import image from "../assets/bg.jpg";
// import bg2 from "../assets/bg.jpeg"

const LoginPage = () => {
  const backgroundImageUrl = 'url("../assets/bg2.jpeg")';
  const divStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '400px',
  
  };

  const [userborderColor, setuserBorderColor] = useState('white');
  const [passborderColor, setpassBorderColor] = useState('white');

  const handleuserClick = () => {
    // Update the border color on click
    setuserBorderColor('#fece48');
    setpassBorderColor('white');
  };

  const handlepassClick = () => {
    // Update the border color on click
    setpassBorderColor('#fece48');
    setuserBorderColor('white');
  };

  return (
   
    <div className="flex items-center justify-center min-h-screen">
    <div className="w-full max-w-md">
      <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
      <form action="dashboard.html" method="POST" className="bg-white shadow-md rounded px-8 py-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your password" />
        </div>
        <div className="flex items-center justify-between">
          <Link to="/dashboard"> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button></Link>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
        <div className="py-5 text-center">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="register.html">
                Don't have an account? Register
              </a>
        </div>
      </form>
      <p className="mt-4 text-center text-gray-500 text-xs">
        &copy; 2023 Your Company. All rights reserved.
      </p>
    </div>
  </div>
  );
};

export default LoginPage;
