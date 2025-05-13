import express from 'express'
import {respondePergunta} from '../controllers/iaController.js'

const router = express.Router()

router.post('/perguntar', respondePergunta)

export default router