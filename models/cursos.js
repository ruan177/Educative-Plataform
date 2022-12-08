const Curso = (sequelize, DataTypes)=>{
    return sequelize.define('Curso',{
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING
    })
}
module.exports = Curso