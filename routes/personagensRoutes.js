import express from "express"
import { createCharacter, deleteCharacter, editCharacter, listCharacter } from "../controllers/personagemController.js"

const router = express.Router()

router.post('/', createCharacter)

router.get('/', listCharacter)

router.put('/:id', editCharacter)

router.delete('/:id', deleteCharacter)

export default router