//const { urlencoded } = require('express')
const express = require('express')
const path = require('path')
const {content} = require('./controllers')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, '/public')))

app.use('/', content)

app.listen(80, ()=>{
    console.log("working on port 80")
})