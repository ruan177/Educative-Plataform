const express = require('express')
const {Usuario} = require('../models')

const router = express()


router.get('/login', (req, res)=>{
    res.status(200).render('login')
})

router.get('/cadastro', (req, res)=>{
    res.status(200).render('cadastro')
})

router.get('/erro', (req, res)=>{
    res.status(200).render('erro')
})

router.post('/login', async (req, res)=>{
    const {email, password} = req.body
    
    const usuario = await Usuario.findOne({
        where: {
            email: email,
            password: password
        }
    })
   
    req.session.login = false;

    if(usuario){
        req.session.login = true
        req.session.nomeUsuario = usuario.username
        res.redirect('/home')
        //res.send('usuario logado');
    }else{
        res.send('erro usuario nao encontrado')
    }
    //res.redirect('/erro')
})

router.post('/novo', async (req, res)=>{
    const {username, email, password } = req.body
    await  Usuario.create({username, email, password})
    res.send('usuario criado')
})

module.exports = router