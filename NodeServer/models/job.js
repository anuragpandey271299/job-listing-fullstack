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
        enum: ['senior', 'junior'],
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        enum:['frontend','backend','fullstack'],
        required:true
    },
    officeType:{
        type:String,
        enum:['remote','office','hybrid'],
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