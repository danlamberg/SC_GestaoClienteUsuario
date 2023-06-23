const express = require('express');
const { body } = require('express-validator');
const ClienteController = require('./controllers/ClienteController');
const ProdutoController = require('./controllers/ProdutoController');
const DocumentoController = require('./controllers/DocumentoController');
const MovimentacaoController = require('./controllers/MovimentacaoController');
const UsuarioController = require('./controllers/UsuarioController');
const DepositoController = require('./controllers/DepositoController');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Servidor de Gestão!');
});

// CRUD de Usuário
routes.get('/', UsuarioController.listar);
routes.post('/login', UsuarioController.autenticar);
routes.get('/usuario/validar', UsuarioController.validarToken);
routes.post('/usuario/', UsuarioController.salvar);
routes.get('/usuario:id', UsuarioController.buscarPorId);
routes.put('/usuario:id', UsuarioController.atualizar);
routes.delete('/usuario:id', UsuarioController.excluir);

//CRUD de Cliente
routes.get('/cliente', ClienteController.listar);
routes.get('/cliente/:id', ClienteController.findById);
routes.post('/cliente', ClienteController.cadastrar);
routes.put('/cliente/:id', ClienteController.atualizar);
routes.delete('/cliente/:id', ClienteController.deletar);

//CRUD de Produto
routes.get('/produto', ProdutoController.listar.bind);
routes.get('/produto/:id', ProdutoController.findByid.bind);
routes.post('/produto', ProdutoController.cadastrar.bind);
routes.put('/produto', ProdutoController.atualizar.bind);
routes.delete('/produto/:id', ProdutoController.deletar.bind);

// CRUD de Documento
routes.get('/documento', DocumentoController.listar.bind);
routes.get('/documento/:id', DocumentoController.findById.bind);
routes.post('/documento', DocumentoController.cadastrar.bind);
routes.put('/documento/:id', DocumentoController.atualizar.bind);
routes.delete('/documento/:id', DocumentoController.deletar.bind);

// CRUD de Movimentacao
routes.get('/movimentacoes', MovimentacaoController.listar.bind);
routes.get('/movimentacoes/:id', MovimentacaoController.findById.bind);
routes.post('/movimentacoes', MovimentacaoController.salvar.bind);
routes.put('/movimentacoes/:id', MovimentacaoController.atualizar.bind);
routes.delete('/movimentacoes/:id', MovimentacaoController.deletar.bind);

//CRUD de Depositos
routes.get('/', DepositoController.listar);

module.exports = routes;
