import User from '../models/user.js'

const getAllUsers = async (req, res) => {

}; 

const createUser = async (req, res) => {

    try {
        const { username, email } = req.body;

        const userExists = await User.findOne({ username })
    
        if (userExists) {
            return res.status(200).json(userExists)
        }
    
        const newUser = await User.create({
            username,
            email
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