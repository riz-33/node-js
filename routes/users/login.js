import User from "../../models/user/index.js";
import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const checkPassword = bcrypt.compareSync(password, user.password);
            if (checkPassword) {
                res.status(200).send({ status: 200, message: "Login successful", user })
            } else {
                res.status(401).send({ status: 401, error: "Invalid password" })
            }
        } else {
            res.status.send({ status: 404, error: "User not found" })
        }
    } catch (err) {
        res.status(500).send({ status: 500, error: err.details || "Something went wrong" })
    }
}
export default loginUser;