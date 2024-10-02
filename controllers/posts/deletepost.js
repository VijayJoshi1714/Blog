import Post from "../../models/posts.js";

const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, postno } = req.body;

        if (!id) console.log("Post not found")
        await Post.findByIdAndDelete(
            id
        )
        res.json("post deleted")
    } catch (error) {
        console.log("Error updating");
    }
}

export default deletePost;