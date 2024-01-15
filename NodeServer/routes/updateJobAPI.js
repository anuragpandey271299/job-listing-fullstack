const express = require('express')
const job = require('../models/job')
const authMiddleware=require('../middleware/authMiddleware')

const router = express.Router()

router.put('/updatejob/:jobID',authMiddleware, async (req, res) => {
    try{
        const jobID = req.params.jobID
        const user_id=req.user._id
        console.log(jobID,user_id)
        const data = req.body
        const updatedJob = await job.findOneAndUpdate({USERID:user_id,_id:jobID},data,{new:true})
        console.log(updatedJob)
        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.json(updatedJob);
    }catch(error){
        console.log(error)
    }

})

module.exports=router