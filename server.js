const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')


app.use(cors());
app.use(bodyParser.json());

app.set('view engine', 'ejs')
mongoose.connect(
    process.env.DB_CONNECTION,
    () => {
    console.log('connected to db!');
})

app.get("/", (req,res) => {
    res.render('index')
})

const userRouter = require('./routes/user')
app.use('/user', userRouter)

app.listen(8080)