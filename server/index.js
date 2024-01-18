const express = require("express")
const dotenv = require('dotenv').config()
const cors = require("cors")
const { mongoose } = require("mongoose")
const app = express();
const data = require('./data/data')
const CustomerModel = require('./models/customer')

mongoose.connect(process.env.MONGO_URL)
    .then(async () => {
        // await mongoose.connection.db.dropCollection('customers');
        // CustomerModel.insertMany(data)
        console.log("Database Connected")
    })
    .catch((err) => { console.log("Database not Connected", err) });



app.use(express.json());
app.use('/', require('./routes/authRoutes'));

const port = 8000;
app.listen(port, () => { console.log(`Server running on ${port}`); })
