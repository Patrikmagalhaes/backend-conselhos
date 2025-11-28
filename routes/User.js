import express from "express"
import { createUser} from "../controllers/User.js"
import {loginUserController} from "../controllers/User.js"

const router = express.Router()

router.post('/', createUser)

router.post('/auth', loginUserController)

export default router