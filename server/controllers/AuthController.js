const UserModel = require('../models/UserModel');

const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {

        const { name, email, password, city, contact } = req.body;
        if (!name || !email || !password || !city || !contact) {
            return res.status(400).send({
                success: false,
                message: "Please fill all the fields"
            });
        }
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "Email already exists"
            });
        }
        let user = await UserModel.create({
            name: name,
            email: email,
            password: password,
            city: city,
            contact: contact
        })
        res.status(200).send({
            success: true,
            message: "User created successfully",
            user: user
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err
        })
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "All field is required"
            });
        }
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(400).send({
                success: false,
                message: "User Email And Password Not Valid"
            });
        }
        const token = await jwt.sign({ payload: user }, "rnw4todolist", { expiresIn: '1hr' })
        return res.status(200).send({
            success: true,
            message: "User Successfully Register",
            token,
            user
        });

    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err
        })
    }
}
const adminPage = (req, res) => {
    return res.send({ message: "welcome to admin page" })
}
module.exports = {
    registerUser, loginUser, adminPage
}