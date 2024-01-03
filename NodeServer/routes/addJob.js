const express=require('express')
const job = require('../models/job')
const authMiddleware = require('../middleware/authMiddleware')

const router=express.Router()

router.post('/addjob',authMiddleware, async (req,res)=>{
    try{
        const {companyName,companyLogo,jobPosition,salary,jobType,officeType,location,jobDescription,aboutCompany,skills,info}=req.body
        const newJob = await job.create({companyName,companyLogo,jobPosition,salary,jobType,officeType,location,jobDescription,aboutCompany,skills,info})
        res.json(newJob)
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})


module.exports = router