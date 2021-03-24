import mongoose from 'mongoose';

//making a schema first
//then converting it to a model
//on a model, we can apply CRUD ops

const postSchema= mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default:0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});


const postMessage= mongoose.model('PostMessage', postSchema);

export default postMessage;