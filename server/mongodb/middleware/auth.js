import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        //get token, verify, get user from token
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Token not found, unauthorized')
    }
})

export {
    protect
}