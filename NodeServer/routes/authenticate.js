const express = require('express');
const Job = require('../models/customer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Job.findOne({ email });

    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);

      if (checkPassword) {
        const jwtoken = jwt.sign( user.toJSON() , process.env.jwt_secretKey, { expiresIn: 20 });
        res.status(200).json({ message: 'Logged in successfully', jwtoken });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
