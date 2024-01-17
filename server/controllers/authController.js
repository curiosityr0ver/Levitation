const User = require('../models/user')

const test = (req, res) => {
    res.json("test is working")
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name) {
            return res.json({ error: "name is required !" })
        } else if (!email) {
            return res.json({ error: "email is required !" })
        } else if (!password) {
            return res.json({ error: "password is required !" })
        }
        const user = await User.create({
            name, email, password
        })
        return res.json(user)


    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    test,
    registerUser
};