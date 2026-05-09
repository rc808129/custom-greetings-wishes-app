import Signup from "../components/Signup";
import Login from "../components/Login";
import { useState } from "react";
import Image from "../assets/greeting-bg.png";
const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-8"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="w-full max-w-3xl bg-linear-to-br from-yellow-50 via-stone-100 to-yellow-100 p-8 rounded-[35px] shadow-[0_15px_50px_rgba(0,0,0,0.12)] border  border-yellow-200 transition-all duration-300  hover:scale-[1.01]  hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
        {isSignup ? (
          <Signup setIsSignup={setIsSignup} />
        ) : (
          <Login setIsSignup={setIsSignup} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
