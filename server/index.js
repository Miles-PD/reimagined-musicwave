import express from 'express';
import connectDB from './mongodb/connect.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import * as dotenv from 'dotenv';

import userRouter from './routes/user.routes.js'
import albumRouter from './routes/album.routes.js'

// ** configs
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send({ message: "Hello" })
})

const serverInit = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, console.log('server on 8080'))
    } catch (error) {
        console.log(error)
    }
}

serverInit();