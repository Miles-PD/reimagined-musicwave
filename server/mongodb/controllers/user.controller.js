import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler'

const getAllUsers = async (req, res) => {

}; 

const registerUser = asyncHandler(async (req, res) => {

    const { username, password } = req?.body;

    if (typeof username !== 'string' || typeof password !== 'string' || !username || !password ) {
        res.status(400)
        throw new Error('One or more fields not in the form of a string')
        return
    } 

    const userExists = await User.findOne({ username })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists.')
    }

    const hashedPass = await bcrypt.hash(password, 10)

    const newUser = await User.create({
        username,
        password: hashedPass
    })

    if (newUser) {
        res.status(201).json({
            _id: newUser.id,
            username: newUser.username,
            token: generateJWT(user._id)
        }) 
        } else {
            res.status(400)
            throw new Error('Invalid user data')
    }

    res.status(200).json(newUser)    

});

const loginUser = (asyncHandler(async (req, res) => {
    const { username, password } = req?.body;

    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: newUser.id,
            username: newUser.username,
        }) 
    } else {
        res.status(400)
        throw new Error('Invalid login request')
    }
}))

const getUserInfoByID = asyncHandler(async (req, res) => {});

const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

export {
    getAllUsers,
    registerUser,
    getUserInfoByID,
    loginUser
}