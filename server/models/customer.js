const mongoose = require("mongoose");
const { Schema } = mongoose
const { loadType } = require("mongoose-currency");

loadType(mongoose);

const customerSchema = new Schema({
    name: String,
    email: String,
    password: String,
    isActive: Boolean,
    balance: mongoose.Types.Currency,
    age: Number,
    eyeColor: String,
    gender: String,
    company: String,
    phone: String,
    address: String
})

const CustomerModel = mongoose.model('Customer', customerSchema);

module.exports = CustomerModel; 