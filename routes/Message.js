import express from 'express'
import { getMessages, responseMessage } from '../controllers/Message.js'

const router = express.Router()

router.post('/', responseMessage )

router.get('/', getMessages )

export default router