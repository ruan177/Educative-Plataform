//const { urlencoded } = require('express')
const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const {content, usuario} = require('./controllers')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, '/public')))

app.use(express.json());

//Permite fazer requisições de tipos PUT/PATCH/DELETE e etc.
app.use(methodOverride('_method'));

app.use('/', content)
app.use('/login', usuario)

app.listen(80, ()=>{
    console.log("working on port 80")
})