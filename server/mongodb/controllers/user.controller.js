import User from '../models/user.js'
import bcrypt from 'bcryptjs'

const getAllUsers = async (req, res) => {

}; 

const createUser = async (req, res) => {

    try {
        const { username, password } = req?.body;

        if (typeof username !== 'string' || typeof password !== 'string' || !username || !password ) {
            res.send('One or more values are not in the form of a string.')
            return
        } 

        const userExists = await User.findOne({ username })
    
        if (userExists) {
            return res.status(400).json('Username taken.')
        }

        const hashedPass = await bcrypt.hash(password, 10)
    
        const newUser = await User.create({
            username,
            password: hashedPass
        })
    
        res.status(200).json(newUser)    
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

};

const getUserInfoByID = async (req, res) => {};

export {
    getAllUsers,
    createUser,
    getUserInfoByID
}