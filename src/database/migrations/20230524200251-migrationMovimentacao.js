'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('movimentacoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('movimentacoes');
  }
};
