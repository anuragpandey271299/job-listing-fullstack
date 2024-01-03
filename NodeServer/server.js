const express = require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()
const customer = require('./models/customer')
const bodyParser = require('body-parser')
const cors = require('cors')
const registeration=require('./routes/registeration')
const job=require('./models/job')
const addjob = require('./routes/addJob')
const authenticate=require('./routes/authenticate')


const app= express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/health',(req,res)=>{
    res.json({
        status:'ACTIVE',
        Message:'Server is running'
    })
})

app.use('/',registeration)
app.use('/',addjob)
app.use('/',authenticate)



app.listen(process.env.PORT,()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log('DB Connected'))
    .catch((error=>console.log(error)))
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})