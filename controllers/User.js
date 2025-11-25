import { newUser } from "../services/newUserService.js"

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



}
