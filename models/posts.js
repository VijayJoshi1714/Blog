import mongoose from "mongoose";

const postinfo = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    postno: {
        type: Number,
        required: true
    }
}, {
    collection: 'blogs'
})

const Post = mongoose.model("Post", postinfo);
export default Post;