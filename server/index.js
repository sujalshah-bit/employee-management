import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import apiRoutes from './routes/apiRoutes.js'

const app = express()
const PORT = process.env.PORT || 9000
dotenv.config({path:'./config.env'})


// GENERAL CONFIGURATION
app.use(express.json())
app.use(cors())


//MONGODB CONFIGURATION
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connect to db"))
  .catch((e) => console.log(e));


// ROUTES
app.get('/',(req,res)=>res.send('hello '))
app.use('/api',apiRoutes)



app.listen(PORT, ()=>console.log(`listening to ${PORT}`))
