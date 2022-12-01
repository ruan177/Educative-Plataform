const Usuario = (sequelize, DataTypes)=>{
    return sequelize.define('Usuario',{
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    })
}
module.exports = Usuario