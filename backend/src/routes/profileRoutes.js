import express from 'express'
import {setupProfile, getUserProfile} from '../controllers/profileController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { upload } from '../middlewares/uploadMiddleware.js'

const profileRoutes = express.Router()

profileRoutes.put("/setup", authMiddleware, upload.single("profilePic"), setupProfile)

profileRoutes.get("/me", authMiddleware, getUserProfile)

export default profileRoutes