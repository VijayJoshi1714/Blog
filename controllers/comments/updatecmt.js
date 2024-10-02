// import Post from "../../models/posts.js";
import Comment from '../../models/comments.js'; // Adjust the path if necessary


const updatedCmt = async (req, res) => {
    try {
        const { id } = req.params;

        const { username, comment } = req.body;

        await Comment.findByIdAndUpdate(
            id,
            {
                username, comment
            },
            {
                new: true
            }
        )
        res.json("Comment Updated")
    } catch (error) {
        console.log("Error updating");
    }
}

export default updatedCmt;