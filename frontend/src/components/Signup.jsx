import { useState } from "react";
import { signupUser, googleUser, guestAPICall } from "../services/authService.js";
import { signInWithPopup } from "firebase/auth";
import {auth, provider} from "../firebase.js"
import { useNavigate } from "react-router-dom";

const Signup = ({setIsSignup}) => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await signupUser(formData);
      localStorage.setItem("token", response.token);
      console.log(response);
      setFormData({ userName: "", email: "", password: "" });
      navigate("/profile-page")
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

async function handleGoogleLogin() {
  try {
    const result = await signInWithPopup(auth, provider);
    const response = await googleUser(result.user);
    localStorage.setItem("token", response.token);
    console.log(response);
    navigate("/profile-page")
  } catch (error) {
    console.log(error)
  }
}

async function handleGuest() {
  try {
   const response = await guestAPICall(formData);
      localStorage.setItem("token", response.token);
      console.log(response);
      navigate("/profile-page")
  } catch (error) {
    console.log(error)
  }

}

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        <h1   className="w-full text-center text-4xl font-bold text-gray-800 mb-6 transition duration-300 hover:scale-110 hover:text-blue-600 cursor-pointer">SignUp Form</h1>
        <input
          type="text"
          name="userName"
          placeholder="Enter your Username"
          value={formData.userName}
          onChange={handleChange}
          className="w-full border-2 border-gray-300 p-4 rounded-xl text-lg outline-none transition duration-300 focus:border-blue-500 focus:scale-105"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          
    className="w-full border-2 border-gray-300 p-4 rounded-xl text-lg outline-none transition duration-300 focus:border-blue-500 focus:scale-105"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
              className="w-full border-2 border-gray-300 p-4 rounded-xl text-lg outline-none transition duration-300 focus:border-blue-500 focus:scale-105"
        />

        <button type="submit" 
    className="w-full bg-blue-600 text-white p-4 rounded-xl text-lg font-semibold transition duration-300 hover:bg-blue-700 hover:scale-105 cursor-pointer">Signup</button>
        <p className="text-center text-lg">Already have an account?
          <button type="button" onClick={()=> setIsSignup(false)} className="ml-2 text-blue-600 font-semibold hover:underline cursor-pointer">Login</button>
        </p>
        
        <button type="button" onClick={handleGoogleLogin}   className="w-full border-2 border-gray-300 p-4 rounded-xl text-lg font-semibold transition duration-300 hover:bg-red-100 hover:border-red-400 hover:scale-105 cursor-pointer">Continue with Google</button>
        <button type="button"  onClick={handleGuest}   className="w-full border-2 border-gray-300 p-4 rounded-xl text-lg font-semibold transition duration-300 hover:bg-green-100 hover:border-green-400 hover:scale-105 cursor-pointer">Continue with Guest</button>
      </form>
    </div>
  );
};

export default Signup;
