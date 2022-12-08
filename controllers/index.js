const homeController = require('./homeController')
const usuarioController = require('./usuarioController')
const cursoController = require('./cursosController')

const controllers = {
    home: homeController,
    usuario: usuarioController,
    curso: cursoController
}    
   
module.exports = controllers