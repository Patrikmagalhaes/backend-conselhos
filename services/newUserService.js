import bcrypt from "bcrypt"

export const newUser = async (data) => {
    const { name, email, password } = data.body

    //check user exist
    const userExists = await User.findOne({ email: email })
    if (userExists) {
        return res.status(422).json({ msg: "Email ja utilizado" })
    }

    try {
        const user = await newUser(req.body)
        res.status(200).json({ m })
    } catch (error) {

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