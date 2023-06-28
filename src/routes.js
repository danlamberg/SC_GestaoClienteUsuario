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
routes.get('/', UsuarioController.listar.bind(UsuarioController));
routes.post('/login', UsuarioController.autenticar.bind(UsuarioController));
routes.get('/usuario/validar', UsuarioController.validarToken.bind(UsuarioController));
routes.post('/usuario/', UsuarioController.salvar.bind(UsuarioController));
routes.get('/usuario/:id', UsuarioController.buscarPorId.bind(UsuarioController));
routes.put('/usuario/:id', UsuarioController.atualizar.bind(UsuarioController));
routes.delete('/usuario/:id', UsuarioController.excluir.bind(UsuarioController));

// CRUD de Cliente
routes.get('/cliente', ClienteController.listar.bind(ClienteController));
routes.get('/cliente/:id', ClienteController.findById.bind(ClienteController));
routes.post('/cliente', ClienteController.cadastrar.bind(ClienteController));
routes.put('/cliente/:id', ClienteController.atualizar.bind(ClienteController));
routes.delete('/cliente/:id', ClienteController.deletar.bind(ClienteController));

// CRUD de Produto
routes.get('/produto', ProdutoController.listar.bind(ProdutoController));
routes.get('/produto/:id', ProdutoController.findByid.bind(ProdutoController));
routes.post('/produto', ProdutoController.cadastrar.bind(ProdutoController));
routes.put('/produto/:id', ProdutoController.atualizar.bind(ProdutoController));
routes.delete('/produto/:id', ProdutoController.deletar.bind(ProdutoController));

// CRUD de Documento
routes.get('/documento', DocumentoController.listar.bind(DocumentoController));
routes.get('/documento/:id', DocumentoController.findById.bind(DocumentoController));
routes.post('/documento', DocumentoController.cadastrar.bind(DocumentoController));
routes.put('/documento/:id', DocumentoController.atualizar.bind(DocumentoController));
routes.delete('/documento/:id', DocumentoController.deletar.bind(DocumentoController));

// CRUD de Movimentacao
routes.get('/movimentacoes', MovimentacaoController.listar.bind(MovimentacaoController));
routes.get('/movimentacoes/:id', MovimentacaoController.findById.bind(MovimentacaoController));
routes.post('/movimentacoes', MovimentacaoController.salvar.bind(MovimentacaoController));
routes.put('/movimentacoes/:id', MovimentacaoController.atualizar.bind(MovimentacaoController));
routes.delete('/movimentacoes/:id', MovimentacaoController.deletar.bind(MovimentacaoController));

// CRUD de Depositos
routes.get('/depositos', DepositoController.listar.bind(DepositoController));

module.exports = routes;
