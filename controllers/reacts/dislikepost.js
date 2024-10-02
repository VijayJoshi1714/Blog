import Like from "../../models/react.js";

const disLike = async (req, res) => {
    try {
        const { id } = req.params;
        const { postno, like } = req.body;

        await Like.findByIdAndUpdate(
            id,
            {
                postno,
                like
            },
            {
                new: true
            }
        );
        res.send("NotLiked")
    } catch (error) {
        res.send("Error Reacting");
    }


}

export default disLike;