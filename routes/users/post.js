import User from "../../models/user/index.js";
import bcrypt from "bcrypt";

const postUser = async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create({
            ...req.body,
            password
        });
        res.status(201).send({ status: 201, message: "User created", user })
    } catch (err) {
        res.status(500).send({ status: 500, error: err.details || "Something went wrong" })
    }
}

export default postUser;