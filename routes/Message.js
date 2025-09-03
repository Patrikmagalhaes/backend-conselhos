import express from 'express'
import { responseMessage } from '../controllers/Message.js'

const router = express.Router()

router.post('/', responseMessage )

router.get('/', responseMessage )

export default router