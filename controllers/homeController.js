const express = require('express')
const session = require('express-session')

const router = express()

router.get('/', (req, res)=>{
    const logado = req.session.login
    const nomeUsuario = req.session.nomeUsuario
    const id = req.session.IdUsuario
    res.status(200).render('index', {logado, nomeUsuario, id})
})

module.exports = router


