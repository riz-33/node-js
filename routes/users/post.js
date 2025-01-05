import User from "../../models/user/index.js";

const postUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send({ status: 201, message: "User created", user })
    } catch (err) {
        res.status(500).send({ status: 500, error: err.details || "Something went wrong" })
    }
}

export default postUser;