import axios from "axios"


export const setupProfile = async (formData) => {

  const token = localStorage.getItem("token");

  const response = await axios.put( "http://localhost:5000/api/profile/setup", formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data;
}


export const getUserProfile = async ()=> {
    const token = localStorage.getItem("token");

     const response = await axios.get( "http://localhost:5000/api/profile/me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data;

}