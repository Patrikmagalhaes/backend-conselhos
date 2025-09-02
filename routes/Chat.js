import express from 'express'
import { createChat, respondePergunta }from '../controllers/Chat.js'

const router = express.Router()

router.post('/', createChat)

router.post('/response', respondePergunta)

export default router