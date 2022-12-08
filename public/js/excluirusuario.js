const axios = require('axios')

const apagaUsuario = async ()=>{
    const data = await axios.delete(`/usuario/delete/${id}`)
}