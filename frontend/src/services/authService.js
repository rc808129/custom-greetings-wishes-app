import axios from 'axios'

export  async function signupUser(formData){
  const response = await axios.post("http://localhost:5000/api/auth/signup", formData)
  return response.data;
}


export async function loginUser(formData){
   const response = await axios.post("http://localhost:5000/api/auth/login", formData)
   return response.data
}

export async function googleUser(data){

  const response = await axios.post("http://localhost:5000/api/auth/google", {
    userName: data.displayName,
    email: data.email
  })

  return response.data

}

export async function guestAPICall(){
  const response =  await axios.get("http://localhost:5000/api/auth/guest")
  return response.data
}