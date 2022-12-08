const express = require('express')
const {Curso, Usuario} = require('../models') 

const router = express()

router.get('/', async (req, res)=>{
    const logado = req.session.login
    const cursos = await Curso.findAll()
    res.status(202).render('cursos/cursos', {logado, cursos})
})
router.post('/:id', async (req, res)=>{
    
    
})

module.exports = router