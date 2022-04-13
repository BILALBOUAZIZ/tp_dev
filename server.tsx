const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
var cors = require('cors')

const items = require("./routes/api/items.tsx")

//Initialiser "express" dans une variable nommée app
const app = express()
app.use(cors())

//BodyParser Middleware 
app.use(bodyParser.json())

//Db config
const db = require("./config/keys").mongoURI

//Connect to mongodb
mongoose.connect(db)
    .then(()=> console.log("Mongo connected ..."))
    .catch(err=>console.log(err))

app.use("/api/items", items);

const port = process.env.PORT || 8002

app.listen(port,()=> console.log(`Server started on port ${port}`))