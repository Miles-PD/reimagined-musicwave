import express from 'express';
import connectDB from './mongodb/connect.js';
import cors from 'cors';

import * as dotenv from 'dotenv';

import userRouter from './mongodb/routes/user.routes.js'
import albumRouter from './mongodb/routes/album.routes.js'
import artistRouter from './mongodb/routes/artist.routes.js'
import labelRouter from './mongodb/routes/label.routes.js'
import genreRouter from './mongodb/routes/genre.routes.js'
import { searchForSong } from './youtube/controllers/videoSearch.controller.js';

// ** configs
dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

app.get('/', (req, res) => {
    res.send({ message: "Hello" })
})

app.get('/search/req_song/', async (req, res) => {
    const query = req.query.q;
    const results = await searchForSong(query);
    res.json(results);
  });

app.use('/api/v1/users', userRouter);
app.use('/api/v1/album', albumRouter);
app.use('/api/v1/artist', artistRouter);
app.use('/api/v1/label', labelRouter);
app.use('/api/v1/genre', genreRouter);

const serverInit = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(8080, console.log('server on 8080'))
    } catch (error) {
        console.log(error)
    }
}

serverInit();