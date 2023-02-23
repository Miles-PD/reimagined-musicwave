import mongoose, { Schema } from "mongoose";

const AlbumSchema = new mongoose.Schema({
    album_id: {type: String, required: true},
    title: {type: String, required: true},
    artist: {type: String, required: true},
    label: {type: String, required: true},
    genre: {type: String, required: true},
    khz: {type: Number, required: true},
    bitrate: {type: Number, required: true},
    numTracks: {type: Number, required: true},
    runtime: {type: Number, required: true},
    parental: {type: Boolean, required: true},
}, { collection: 'albums' })

const albumModel = mongoose.model('Album', AlbumSchema)

export default albumModel;

