require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

console.log ("cleanup")

mongoose.connect(process.env.DATABASE_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true,})

const db = mongoose.connection

// Announce errors from opening the db.
db.on('error', (error) => console.error("Error", error))

// Announce successful connection to th db.
db.once('open', () => console.log("Connected to db"))

// Set up.
app.use(express.json())

// Set up routers to subscribers data
const subscribersRouter = require('./routes/subscribers.js')
app.use('/subscribers', subscribersRouter)

// Awaiting message to do something.
app.listen(3000, () => console.log("Server started"))
