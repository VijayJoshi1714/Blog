import mongoose from "mongoose";

const cmtinfo = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {
    collection: 'cmts'
})

const Comment = mongoose.model("Comment", cmtinfo);
export default Comment;