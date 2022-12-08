'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarioCurso',{
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        unique:true,
        onDelete: 'CASCADE',
        allowNull: false
      },
      cursoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cursos',
          key: 'id'
        },
        unique:true,
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')  
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarioCurso');
 
  }
};
