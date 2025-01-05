import User from "../../models/user/index.js";
import bcrypt from "bcrypt";
import 'dotenv/config'
import jwt from "jsonwebtoken";

const postUser = async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create({
            ...req.body,
            password
        });
        var token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
        res.status(201).send({ status: 201, message: "User created", user, token });
    } catch (err) {
        res.status(500).send({ status: 500, error: err.details || "Something went wrong" }
        )
        console.log(err)
    }
}

export default postUser;