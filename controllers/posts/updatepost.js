// import Post from "../../models/posts.js";
import Post from '../../models/posts.js'; // Adjust the path if necessary


const updatedPost = async (req, res) => {
    try {
        const { id } = req.params;

        const { username, postno } = req.body;

        await Post.findByIdAndUpdate(
            id,
            {
                username, postno
            },
            {
                new: true
            }
        )
        res.json("post Updated")
    } catch (error) {
        console.log("Error updating");
    }
}

export default updatedPost;