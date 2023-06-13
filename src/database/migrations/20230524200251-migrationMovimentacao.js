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
 
   tipo:{
       type: Sequelize.STRING,
       allowNull: false
 
   },
 
   data:{
       type: Sequelize.DATE,
       allowNull: false
   },
 
   valor:{
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
