import jwt from "jsonwebtoken";
import 'dotenv/config';

const tokenVerification = (req, res, next) => {
    try {
        if (req.headers?.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            var decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (decoded) {
                next();
            } else {
                res.status(401).send({ status: 401, message: "Unauthorized Token" })
            }
        } else {
            res.status(401).send({ status: 401, message: "Unauthorized Token" })
        }
    } catch (err) {
        res.status(500).send({ status: 500, message: "Unauthorized Token" })
    }
}

export default tokenVerification;