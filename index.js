//const { urlencoded } = require('express')
const express = require('express')
const path = require('path')
const methodOverride = require('method-override')

const {home, usuario} = require('./controllers')

const app = express()
const session = require('express-session')
const oneDay = 1000*60*60*80
//const sessionOptions = {secret: 'eldenring', cookie: {maxAge: oneDay}, resave: false , saveUnitialized:false}

app.use(session({
    secret: 'eldenring', 
    cookie: {maxAge: oneDay}, 
    resave: false , 
    saveUninitialized: false
}))

function secure_pass(req, res, next) {
   if(req.session.login || req.path==='/login'){
        next()
    }else{
        res.redirect('/usuarios/login')
    }
}

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, '/public')))

app.use(express.json());

//Permite fazer requisições de tipos PUT/PATCH/DELETE e etc.
app.use(methodOverride('_method'));

app.use('/home', home)
app.use('/usuarios', usuario)
app.use(secure_pass)


app.listen(80, ()=>{
    console.log("working on port 80")
})