import Like from "../../models/react.js";

const React = async (req, res) => {

    try {
        const { postno, like } = req.body;

        const likepost = new Like({
            postno,
            like
        })

        const status = await likepost.save();
        res.status(201).json(status);
    } catch (error) {
        console.error("Error toggling like status:", error);
        res.status(500).json({ message: "Server error" });
    }
}

export default React;