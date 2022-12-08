const Usuario = (sequelize, DataTypes)=>{
    return sequelize.define('Usuario',{
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    })
}
Usuario.associate = (models)=>{
    Usuario.belongsToMany(models.Curso,{
        through: 'UsuarioCurso',
        as: 'cursos',
        foreignKey: 'UsuarioId',
    })
}
module.exports = Usuario