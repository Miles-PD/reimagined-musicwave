import express from 'express';
import { protect } from '../middleware/auth.js'

import {
    getAllUsers,
    registerUser,
    getUserInfoByID,
    loginUser
} from '../controllers/user.controller.js'

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/signup').post(registerUser);
router.route('/:id').get(getUserInfoByID);
router.route('/login').get(loginUser)

export default router;