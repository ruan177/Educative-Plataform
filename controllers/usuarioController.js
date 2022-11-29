const express = require('express')
const {Usuario} = require('../models')

const router = express()


router.get('/', (req, res)=>{
    res.status(200).render('login')
})

router.get('/cadastro', (req, res)=>{
    res.status(200).render('cadastro')
})
router.post('/', async (req, res)=>{
    const {email, password} = req.body

    const usuario = await Usuario.findOne({
        where:{
            email: email,
            password: password
        }
    })

    req.session.login = false
    if(Usuario){
        req.session.login = true
        res.redirect('/usuarios')
    }
    res.redirect('/erro')
})

module.exports = router