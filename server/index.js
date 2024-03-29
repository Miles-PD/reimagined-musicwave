import express from 'express';
import connectDB from './mongodb/connect.js';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcryptjs'

import cors from 'cors';

import * as dotenv from 'dotenv';

import User from './mongodb/models/user.js'

import userRouter from './mongodb/routes/user.routes.js'
import albumRouter from './mongodb/routes/album.routes.js'
import artistRouter from './mongodb/routes/artist.routes.js'
import labelRouter from './mongodb/routes/label.routes.js'
import genreRouter from './mongodb/routes/genre.routes.js'
import songDataRouter from './youtube/routes/videoSearch.routes.js'
import streamRouter from './youtube/routes/streaming.routes.js'


// ** configs
dotenv.config();


const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded());
app.use(cors());

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send({ message: "Hello" });
})

app.use('/api/v1/users', userRouter);
app.use('/api/v1/album', albumRouter);
app.use('/api/v1/artist', artistRouter);
app.use('/api/v1/label', labelRouter);
app.use('/api/v1/genre', genreRouter);
app.use('/api/v1/songdata', songDataRouter)
app.use('/api/v1/stream', streamRouter)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

const serverInit = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(8080, console.log('server on 8080'));
    } catch (error) {
        console.log(error);
    }
}

serverInit();