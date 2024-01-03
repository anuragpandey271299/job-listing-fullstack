const express = require('express')
const Customer = require('../models/customer')
const authMiddleware=require('../middleware/authMiddleware')

const router = express.Router()

router.get('/mydata',authMiddleware, async (req, res) => {
    try {
        const loggedInUserId=req.user._id //gets ID for loggedin users only
        const user = await Customer.findOne({_id:loggedInUserId})
        res.send(user)
    } catch (error) {
        console.log(error)

    }
})
module.exports = router