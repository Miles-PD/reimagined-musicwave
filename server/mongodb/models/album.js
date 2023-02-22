import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
    title: {type: String, required: true},
    artist: {type: String, required: true},
    label: {type: String, required: true},
    genre: {type: String, required: true},
    numTracks: {type: Number, required: true},
    runtime: {type: Number, required: true},
    parental: {type: Boolean, required: true},
    img: {type: String, required: true},
    relDate: {type: String, required: true},
    khz: {type: [Number], required: true},
    bitrates: {type: [Number], required: true},
    copyright: {type: String, required: true},
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
})

const albumModel = mongoose.model('Album', UserSchema)

export default albumModel;