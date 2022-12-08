'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cursos', [{
      nome: 'Matematica',
      descricao: "A Matemática é uma ciência que busca estabelecer..."    
    },
    {
      nome: 'Redação',
      descricao: 'A redação preocupa muitos estudantes que vão fazer o Enem, ...',
    },
    {
      nome: 'Português',
      descricao: 'Dentre as áreas mais importantes da disciplina, estão: morfologia, ...',
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cursos', null, {});

  }
};
