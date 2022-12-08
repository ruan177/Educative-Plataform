const Curso = (sequelize, DataTypes)=>{
    return sequelize.define('Curso',{
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING
    })
}
Curso.associate = (models)=>{
    Curso.belongsToMany(models.Usuario,{
        through: 'UsuarioCurso',
        as: 'usuarios',
        foreignKey: 'CursoId',
    })
}
module.exports = Curso