import Comment from '../../models/comments.js'; // Adjust the path if necessary

let blog;
const createCmt = async (req, res) => {
    try {
        const { username, comment } = req.body;

        blog = new Comment({
            username,
            comment
        });

        const newcmt = await blog.save();

        res.status(201).json(newcmt);  // Removed the res.send(newpost)

    } catch (error) {
        console.log("Error cmt:", error);  // Log the actual error message
        res.status(500).json({ message: "Error cmting" });  // Send an error response
    }
}

export default createCmt;
