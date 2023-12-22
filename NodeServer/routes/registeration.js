const express = require('express');
const customer = require('../models/customer');
const bcrypt=require('bcrypt')

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password,10) 
    const newCustomer = await customer.create({ name, email, mobile, password:encryptedPassword });

    res.status(201).json({ message: 'Customer registered successfully', data: newCustomer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
