const Customer = require('../models/customer')

const test = (req, res) => {
    res.json("test is working")
}

const registerCustomer = async (req, res) => {
    try {
        const { name, email, password, isActive, balance, age, eyeColor, gender, company, phone, address } = req.body;

        if (!name) {
            return res.json({ error: "name is required !" })
        } else if (!email) {
            return res.json({ error: "email is required !" })
        } else if (!password) {
            return res.json({ error: "password is required !" })
        } else if (!balance) {
            return res.json({ error: "balance is required !" })
        } else if (!gender) {
            return res.json({ error: "gender is required !" })
        }
        const customer = await Customer.create({
            name, email, password, isActive, balance, age, eyeColor, gender, company, phone, address
        })
        return res.json(customer)


    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    test,
    registerCustomer
};