const express=require('express')
const router=express.Router()
const job=require('../models/job')
const authMiddleware=require('../middleware/authMiddleware')

router.delete('/delete/:id',authMiddleware,async (req,res)=>{
    try{
        const jobID=req.params.id
        const user_id=req.user._id
        const deletedJob=await job.findOneAndDelete({USERID:user_id,_id:jobID})
        if (deletedJob) {
            res.json({ message: 'Job deleted successfully', deletedJob });
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    }catch(error){
        console.log(error)
    }
})

module.exports=router