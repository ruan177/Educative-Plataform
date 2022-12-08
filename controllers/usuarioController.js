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
router.get('/logoff', (req, res)=>{
    req.session.destroy();
    res.redirect('/home');
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
        req.session.IdUsuario = usuario.id
        res.redirect('/home')
        //res.send('usuario logado');
    }else{
        res.send('erro usuario nao encontrado')
    }
    //res.redirect('/erro')
})

router.post('/cadastro', async (req, res)=>{
    const {username, email, password } = req.body
    await Usuario.create({username, email, password})

    res.redirect('/usuarios/login')
})
router.post('/delete', async (req, res)=>{
    await Usuario.destroy(
        {
            where: {id: req.session.IdUsuario}
        }
    );
    res.redirect('/home')
} )

module.exports = router