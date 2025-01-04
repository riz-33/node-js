import User from "../../models/user/index.js";

const postUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.send({ status: 201 })
    } catch (err) {
        res.send({ error: err.details || "Something went wrong" })
    }
}

export default postUser;