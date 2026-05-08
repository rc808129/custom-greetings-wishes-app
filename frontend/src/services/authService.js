import axios from 'axios'

const API_URL = import.meta.env.VITE_API_BASE_URL;
export  async function signupUser(formData){
  const response = await axios.post(`${API_URL}/auth/signup`,  formData)
  return response.data;
}
// auth signup

export async function loginUser(formData){
   const response = await axios.post(`${API_URL}/auth/login`, formData)
   return response.data
}
// login
export async function googleUser(data){

  const response = await axios.post(`${API_URL}/auth/google`, {
    userName: data.displayName,
    email: data.email
  })

  return response.data

} // google

export async function guestAPICall(){
  const response =  await axios.get(`${API_URL}/auth/guest`)
  return response.data
}  // guest