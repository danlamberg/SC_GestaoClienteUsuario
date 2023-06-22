'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('itens_movimentacao', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      valorunitario: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      movimentacaoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'movimentacoes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('itens_movimentacao');
  }
};
