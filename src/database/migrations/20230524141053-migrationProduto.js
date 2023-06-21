'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('produtos', {
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
  
    descricao:{
        type: Sequelize.STRING,
        allowNull: true
    },

    quantidade:{
      type: Sequelize.INTEGER,
      allowNull: true     
    },

    preco:{
      type: Sequelize.FLOAT,
      allowNull: true
    },
    
     });
   },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
