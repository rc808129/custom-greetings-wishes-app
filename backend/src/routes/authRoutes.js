import express from 'express'

import {signupUser, loginUser, googleAuthUser, guestUser} from '../controllers/authController.js'

const authRoutes = express.Router();


authRoutes.post("/signup", signupUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/google", googleAuthUser)
authRoutes.get("/guest", guestUser)


export default authRoutes;