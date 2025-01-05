import User from "../../models/user/index.js";

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        res.status(200).send({ status: 200, message: "User updated", user })
    } catch (error) {
        res.status(404).send({ status: 404, error: "User not found" })
    }
}

export default updateUser;