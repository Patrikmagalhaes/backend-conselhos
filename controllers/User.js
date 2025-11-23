import { newUser } from "../services/newUserService"

export const createUser = async (req, res) => {
try {
    const user =  await newUser(req.body)
    res.status(200).json({m})
} catch (error) {
    
}
    
}
