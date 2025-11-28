import { newUser, loginUser } from "../services/newUserService.js"

export const createUser = async (req, res) => {
    const { name, email, password } = req.body

    //validation
    if (!name) {
        return res.status(422).json({ msg: "O nome é obrigatório" })
    }

    if (!email) {
        return res.status(422).json({ msg: "O Email é obrigatório" })
    }

    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatória" })
    }

    try {
        const user = await newUser(req.body)
        res.status(201).json({ msg: "Usuário criado" })
    } catch (error) {
        res.status(201).json({ error: error.message })
    }
}

export const loginUserController = async (req, res) => {

    const {email, password} = req.body

    //validation
    if (!email) {
        return res.status(422).json({ msg: "O Email é obrigatório" })
    }

    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatória" })
    }

    try {
        const login = await loginUser(req.body)
        res.status(200).json({ msg: "Login concluido" })
    } catch (error) {
        res.status(422).json({ error: error.message })
    }
}
