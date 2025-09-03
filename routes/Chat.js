import express from 'express'
import { createChat }from '../controllers/Chat.js'

const router = express.Router()

router.post('/', createChat)


export default router