import Comment from "../../models/comments.js";

const deleteCmt = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, comment } = req.body;

        // if (!id) console.log("Post not found")
        await Comment.findByIdAndDelete(
            id
        )
        res.json("Comment deleted")
    } catch (error) {
        console.log("Error updating");
    }
}

export default deleteCmt;