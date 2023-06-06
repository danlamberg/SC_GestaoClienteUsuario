module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    port: '3306',
    password: 'minhasenha',
    database: 'gestaoclientes',
    define: {
      timestamps: false, //alterado de true para false devido a execução no Postman/Insominia
      underscored: true,
    },
  };