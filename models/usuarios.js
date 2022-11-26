const Usuario = (sequelize, DataTypes)=>{
    return sequelize.define('usuario',{
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    })
}
module.exports = Usuario