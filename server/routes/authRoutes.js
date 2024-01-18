const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test, registerUser, introduceUser } = require('../controllers/authController')
const CustomerModel = require('../models/customer.js')

router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

// router.get('/', test)
router.get('/', async (req, res) => {
    try {
        const data = await CustomerModel.find(); // Or add query parameters if needed
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.post('/register', registerUser)


module.exports = router