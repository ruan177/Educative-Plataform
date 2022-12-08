const express = require('express')
const {Usuario} = require('../models')

const router = express()


router.get('/login', (req, res)=>{
    res.status(200).render('usuarios/login')
})

router.get('/cadastro', (req, res)=>{
    res.status(200).render('usuarios/cadastro')
})

router.get('/erro', (req, res)=>{
    res.status(200).render('erro')
})
router.get('/logoff', (req, res)=>{
    req.session.destroy();
    res.redirect('/home');
})
router.get('/settings', (req, res)=>{
    const username = req.session.nomeUsuario
    const email  = req.session.emailUsuario
    res.status(200).render('usuarios/settings', {username, email})
})
/*router.get('/delete', (req, res)=>{
    const id = req.session.IdUsuario
    res.status(200).redirect(`/usuarios/delete/${id}`)
})*/

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
        req.session.emailUsuario = usuario.email
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

router.patch('/settings', async (req, res)=>{
    const {username, email, password} = req.body;

    await Usuario.update(
        {username, email, password},
        {
            where: {id: req.session.IdUsuario}
        }
    );
    res.redirect('/usuarios/login')

})

router.delete('/delete/:id', async (req, res)=>{

    await Usuario.destroy(
        {
            where: {id: req.session.id}
        }
    );
     res.status(202).redirect('/home')
} )

module.exports = router