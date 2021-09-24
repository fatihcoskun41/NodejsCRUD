const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const productRouter = require("./routes/product")
const cors = require("cors")


dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() => console.log("Successfull")).catch((err) => console.log("err"))
app.use(cors())
app.use(express.json())
app.use("/admin",productRouter)
app.use("/f",(req,res)=>res.send("hello"))


app.listen(5000,()=>console.log("başarılı"))
