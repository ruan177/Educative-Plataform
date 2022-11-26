const express = require('express')

const router = express()

router.get('/', (req, res)=>{
    res.status(200).render('login')
})

router.get('/cadastro', (req, res)=>{
    res.status(200).render('cadastro')
})
module.exports = router