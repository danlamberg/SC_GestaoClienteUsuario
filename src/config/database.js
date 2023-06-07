module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    port: '3306',
    password: 'minhasenha',
    database: 'GestaoSistemaCorporativo',
    define: {
      timestamps: false, //alterado de true para false devido a execução no Postman/Insominia
      underscored: true,
    },
  };