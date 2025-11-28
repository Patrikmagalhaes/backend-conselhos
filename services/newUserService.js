import bcrypt from "bcrypt"
import User from "../models/User.js"

export const newUser = async (data) => {
    const { name, email, password } = data

    //check user exist
    const userExists = await User.findOne({ email: email })
    if (userExists) {
        throw new Error("E-mail já cadastrado")
    }

    //create password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    //create user
    const user = new User({
        name,
        passwordHash,
        email
    })

    await user.save()
    return user

}

export const loginUser = async (data) => {
    const { email, password } = data
    console.log(data)
    
    const user = await User.findOne({ email: email })
    if (!user) {
        throw new Error("Usuario não encontrado")
    }

    //check password
    const checkPassword = await bcrypt.compare(password, user.passwordHash)

    if (!checkPassword) {
        throw new Error("Senha incorreta")
    }

    try {
        const secret = process.env.secret
        const token = jwt.sign({ id: user._id, secret })
    } catch (error) {
        throw new Error("Erro interno")
    }
}