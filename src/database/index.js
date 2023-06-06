const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Cliente = require('../models/ClienteModel');
const Deposito = require('../models/DepositoModel');
const Documento = require('../models/DocumentoModel');
const Movimentacao = require('../models/MovimentacaoModel');
const Produto = require('../models/ProdutoModel');
const ItemMovimentacao = require('../models/ItemMovimentoModel');
const Titulo = require('../models/TituloModel');

const connection = new Sequelize(dbConfig);

Cliente.init(connection);
Deposito.init(connection);
Documento.init(connection);
Movimentacao.init(connection);
Produto.init(connection);
ItemMovimentacao.init(connection);
Titulo.init(connection);

module.exports = connection;