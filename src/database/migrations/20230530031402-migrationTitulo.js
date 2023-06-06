'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('titulo', {
     id:{
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
  valororiginal: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  situacao: {
    type: Sequelize.STRING,
    allowNull: false
  },
  valoraberto: {
    type: Sequelize.FLOAT,
    allowNull: false
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
