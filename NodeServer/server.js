const express = require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()

const app= express()

app.get('/health',(req,res)=>{
    res.json({
        status:'ACTIVE',
        Message:'Server is running'
    })
})

app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log('DB Connected'))
    .catch((error=>console.log(error)))
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})