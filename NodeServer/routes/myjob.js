const express=require('express')
const authMiddleware=require('../middleware/authMiddleware')
const job=require('../models/job')

const router=express.Router()

router.get('/myjob',authMiddleware,async(req,res)=>{
    const user_id = req.user._id
    const newJOB = await job.find({USERID:user_id})
    res.send(newJOB)
})

module.exports=router