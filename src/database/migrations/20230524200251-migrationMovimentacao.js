'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('movimentacao', {
     id:{
       type: Sequelize.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
   },
 
   cpf:{
       type: Sequelize.INTEGER,
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
  
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
