import jwt from "jsonwebtoken";
import 'dotenv/config'

const tokenVerification = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send({ message: "Invalid Token" });
    }
}

export default tokenVerification;



// const tokenVerification = (req, res, next) => {
//     if (req.headers?.authorization) {
//         const token = req.headers.authorization.split(' ')[1];
//         var decoded = jwt.verify(token, process.env.SECRET_KEY);
//         if (decoded) {
//             next();
//         } else {
//             res.status(401).send({ status: 401, message: "Unauthorized Token" })
//         }
//     } else {
//         res.status(401).send({ status: 401, message: "Unauthorized Token" })
//     }
// }

// export default tokenVerification;