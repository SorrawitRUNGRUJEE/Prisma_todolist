const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT


const todoRoute = require('./routes/todoRoute')
const userRoute = require('./routes/userRoute')

app.use(express.json())

app.use('/todo',todoRoute)
app.use('/user',userRoute)




app.use((err,req,res,next)=>{
res.status(err.status).json({msg:err.message})

})
app.listen(port,console.log('server operational at port =>',port))

