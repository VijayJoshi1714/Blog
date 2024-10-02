import Post from '../../models/posts.js'; // Adjust the path if necessary

let blog;
const createPost = async (req, res) => {
    try {
        const { username, postno } = req.body;

        blog = new Post({
            username,
            postno
        });

        const newpost = await blog.save();

        res.status(201).json(newpost);  // Removed the res.send(newpost)

    } catch (error) {
        console.log("Error inserting:", error);  // Log the actual error message
        res.status(500).json({ message: "Error inserting post" });  // Send an error response
    }
}

export default createPost;
