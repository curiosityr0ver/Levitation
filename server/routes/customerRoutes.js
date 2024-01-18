const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test, registerCustomer } = require('../controllers/customerController')

router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

router.get('/', test)
router.post('/account', registerCustomer)


module.exports = router