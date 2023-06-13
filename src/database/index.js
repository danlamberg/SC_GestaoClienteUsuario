const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Usuario = require('../models/UsuarioModel');
const Cliente = require('../models/ClienteModel');
const Deposito = require('../models/DepositoModel');
const Documento = require('../models/DocumentoModel');
const Movimentacao = require('../models/MovimentacaoModel');
const Produto = require('../models/ProdutoModel');
const ItemMovimentacao = require('../models/ItemMovimentoModel');
const Titulo = require('../models/TituloModel');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Cliente.init(connection);
Deposito.init(connection);
Documento.init(connection);
Movimentacao.init(connection);
Produto.init(connection);
ItemMovimentacao.init(connection);
Titulo.init(connection);

// Definir as associações
Cliente.associate(connection.models);
Deposito.associate(connection.models);
Documento.associate(connection.models);
Movimentacao.associate(connection.models);
Produto.associate(connection.models);
ItemMovimentacao.associate(connection.models);
Titulo.associate(connection.models);

module.exports = connection;
