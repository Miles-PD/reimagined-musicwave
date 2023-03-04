import express from 'express';

import {
    getAllAlbumsFromLabel
} from '../controllers/label.controller.js'

const router = express.Router();

router.route('/:label').get(getAllAlbumsFromLabel)

export default router;