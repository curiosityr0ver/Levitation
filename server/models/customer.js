const mongoose = require("mongoose");
const { Schema } = mongoose

const customerSchema = new Schema({
    name: String,
    email: String,
    password: String,
    isActive: Boolean,
    balance: Number,
    age: Number,
    eyeColor: String,
    gender: String,
    company: String,
    phone: String,
    address: String
})

const CustomerModel = mongoose.model('Customer', customerSchema);

module.exports = CustomerModel; 