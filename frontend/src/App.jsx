
import AuthPage from "./pages/AuthPage"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"
import { Route, Routes } from "react-router-dom"

const App = ()=> {

  return(<div className="min-h-screen w-full bg-gray-100">
   
    <Routes>
      <Route path="/" element={<AuthPage/>}/>
      <Route path="/profile-page" element={<ProfilePage/>}/>
      <Route path="/home-page" element={<HomePage/>}/>
   
    </Routes>
    
    
  </div>)
}

export default App