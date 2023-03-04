import express from 'express';

import {
    getAllAlbumsFromGenre,
} from '../controllers/genre.controller.js'

const router = express.Router();

router.route('/:genre').get(getAllAlbumsFromGenre)

export default router;