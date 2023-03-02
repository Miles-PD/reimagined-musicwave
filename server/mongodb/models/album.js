import mongoose, { Schema } from "mongoose";

const AlbumSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
      },
    title: {type: String, required: true},
    artist: {type: String, required: true},
    label: {type: String, required: true},
    genre: {type: String, required: true},
    khz: {type: Number, required: true},
    bitrate: {type: Number, required: true},
    numTracks: {type: Number, required: true},
    runtime: {type: Number, required: true},
    parental: {type: Boolean, required: true},
    tracks: {
            trackTitles: [String],
            trackLengths: [String]
    }
}, { collection: 'albums' })

const albumModel = mongoose.model('Album', AlbumSchema)

export default albumModel;

