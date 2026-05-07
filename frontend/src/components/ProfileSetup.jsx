import { useState } from "react";
import { setupProfile } from "../services/profileService.js";
import { useNavigate } from "react-router-dom";

const ProfileSetup = () => {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate()

  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState("")

  function handleImage(e){

    const file = e.target.files[0];
    setProfilePic(file);

    setPreview(URL.createObjectURL(file))
  }

   async function handleSubmit(e) {
    e.preventDefault();
    try {
    const formData = new FormData();

    formData.append("userName", userName);

    formData.append("profilePic", profilePic);
  const data = await setupProfile(formData);
  console.log(data)
  navigate("/home-page")
    } catch (error){
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100  via-blue-200 to-indigo-300 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl sm:max-w-2xl min-h-[700px]  bg-gradient-to-br from-white/80  via-blue-50/70 to-purple-100/70  backdrop-blur-2xl   p-8   sm:p-12  rounded-[45px]  shadow-[0_25px_80px_rgba(0,0,0,0.18)]  border   border-white/50   flex  flex-col items-center  gap-8 transition-all  duration-300"
      >
        <h1 className="text-5xl   font-extrabold text-gray-800  tracking-wide  text-center">Profile Setup</h1>

        <label className="relate cursor-pointer group">
          <div className="w-52 h-52 sm:w-64  sm:h-64   md:w-72  md:h-72 rounded-full overflow-hidden border-[6px] border-blue-500 shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all duration-300 group-hover:scale-105">
            <img src={preview || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="profile" className="w-full h-full object-cover"/>
          </div>
          <input type="file" hidden onChange={handleImage}/>
        </label>

        <input
          type="text"
          placeholder="Enter Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full border-2 font-bold py-5  px-6 text-xl  sm:text-2xl border-gray-300 rounded-2xl p-4   bg-white/90  outline-none focus:border-blue-500    focus:ring-4    focus:ring-blue-200   transition-all   duration-300 shadow-md "
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white  font-semibold p-4 rounded-2xl transition duration-300 hover:scale-105 cursor-pointer text-2xl py-5" 
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileSetup
