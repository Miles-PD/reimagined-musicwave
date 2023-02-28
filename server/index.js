import express from 'express';
import connectDB from './mongodb/connect.js';
import cors from 'cors';

import * as dotenv from 'dotenv';

import userRouter from './mongodb/routes/user.routes.js'
import albumRouter from './mongodb/routes/album.routes.js'

// ** configs
dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

app.get('/', (req, res) => {
    res.send({ message: "Hello" })
})

app.use('/api/v1/users', userRouter);
app.use('/api/v1/album', albumRouter);

const serverInit = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(8080, console.log('server on 8080'))
    } catch (error) {
        console.log(error)
    }
}

serverInit();