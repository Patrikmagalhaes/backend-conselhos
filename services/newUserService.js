import bcrypt from "bcrypt"

export const newUser = async (data) => {

const { name, email, password } = data

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

    //check user exist
    const userExists = await User.findOne({ email: email })
    if (userExists) {
        return res.status(422).json({ msg: "Email ja utilizado" })
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

    try {
        await user.save()
        res.status(201).json({ msg: "Usuário Criado" })
    } catch (error) {
        res.status(500).json({ msg: " Erro interno" })
        console.log(error)
    }





}