import mongoose from "mongoose";

const likeinfo = new mongoose.Schema({
    postno: {
        type: String
    },
    like: {
        type: String,
        default: "NotLiked",
        required: true
    }
}, {
    collection: "Likes"
})

const Like = mongoose.model("Like", likeinfo);
export default Like;