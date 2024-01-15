const mongoose=require('mongoose')

const jobSchema = new mongoose.Schema({
    USERID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    companyLogo:{
        type:String,
        required:true
    },
    jobPosition:{
        type:String,
        enum: ['Senior', 'Junior'],
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        enum:['Frontend','Backend','Fullstack'],
        required:true
    },
    officeType:{
        type:String,
        enum:['Remote','Office','Hybrid'],
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    },
    aboutCompany:{
        type:String,
        required:true
    },
    skills:{
        type:[Array],
        required:true
    },
    info:{
        type:String,
        required:true
    }
})

const Job = mongoose.model('Job',jobSchema)
module.exports = Job