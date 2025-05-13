import express from "express"
import { criarPersonagem, deletarPersonagem, editarPersonagem, listarPersonagens } from "../controllers/personagemController.js"

const router = express.Router()
//ready
router.get('/', listarPersonagens)

//Create
router.post('/', criarPersonagem)

//Update
router.put('/:id', editarPersonagem)

//Delete
router.delete('/:id', deletarPersonagem)

export default router