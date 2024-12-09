const jwt = require('jsonwebtoken');


const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(400).send({
                success: false,
                message: "Token is blank",
            });
        }

        const newToken = token.slice(7);
        jwt.verify(newToken, "rnw4todolist", (err, decoded) => {
            if (err) {
                return res.status(400).send({
                    success: false,
                    message: "Token is not valid",
                });
            }
            // If the token is valid, proceed with your logic
            req.user = decoded.payload;
            return next()
        });
    } catch (err) {
        console.log(err);
        return false;
    }

}
const Admin = (req, res, next) => {
    if (req.user.role != "admin") {
        return res.status(400).send({
            success: false,
            message: "Unauthorized access contact to admin",
        });
    }
    return next();
}
module.exports = {
    verifyToken, Admin
}