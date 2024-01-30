require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const contact=require('./routes/contact')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
var corsOptions = {
    origin: "http://13.201.29.87:443"
};
app.use(cors(corsOptions))
app.use('/api/contact',contact)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
  