const express = require('express')
const {Curso} = require('../models') 

const router = express()

router.get('/', async (req, res)=>{
    const cursos = await Curso.findAll()
    res.send({cursos})
})


module.exports = router