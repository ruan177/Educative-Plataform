const express = require('express')
const session = require('express-session')

const router = express()

router.get('/', (req, res)=>{
    logado = req.session.login
    nomeUsuario = req.session.nomeUsuario

    res.status(200).render('index', {logado, nomeUsuario})
})

module.exports = router


