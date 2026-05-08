import axios from "axios"

const API_URL = import.meta.env.VITE_API_BASE_URL;
export const setupProfile = async (formData) => {

  const token = localStorage.getItem("token");

  const response = await axios.put( `${API_URL}/profile/setup`, formData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data;
}


export const getUserProfile = async ()=> {
    const token = localStorage.getItem("token");

     const response = await axios.get( `${API_URL}/profile/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data;

}