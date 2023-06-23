'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('clientes', {
     id:{
       type: Sequelize.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
   },
 
   cpf:{
       type: Sequelize.BIGINT,
       allowNull: false
 
   },
 
   nome:{
       type: Sequelize.STRING,
       allowNull: false
   },
 
   email:{
       type: Sequelize.STRING,
       allowNull: true
   },
   
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('clientes');
   
  }
};
