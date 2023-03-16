import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    allProperties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
}, { collection: 'users' })

const userModel = mongoose.model('User', UserSchema)

export default userModel;