const express = require('express');
const { body } = require('express-validator');
const ClienteController = require('./controllers/ClienteController');
const ProdutoController = require('./controllers/ProdutoController');
const DocumentoController = require('./controllers/DocumentoController');
const MovimentacaoController = require('./controllers/MovimentacaoController');
const UsuarioController = require('./controllers/UsuarioController');

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

//CRUD Cliente
routes.get('/cliente', ClienteController.listar);
routes.get('/cliente/:id', ClienteController.findById);
routes.post('/cliente', ClienteController.cadastrar);
routes.put('/cliente/:id', ClienteController.atualizar);
routes.delete('/cliente/:id', ClienteController.deletar);



//CRUD Produto
routes.get('/produto', ProdutoController.listar.bind(ProdutoController));
routes.get('/produto/:id', ProdutoController.findByid.bind(ProdutoController));
routes.post('/produto', ProdutoController.cadastrar.bind(ProdutoController));
routes.put('/produto', ProdutoController.atualizar.bind(ProdutoController));
routes.delete('/produto/:id', ProdutoController.deletar.bind(ProdutoController));

// CRUD Documento
routes.get('/documento', DocumentoController.listar.bind(DocumentoController));
routes.get('/documento/:id', DocumentoController.findById.bind(DocumentoController));
routes.post('/documento', DocumentoController.cadastrar.bind(DocumentoController));
routes.put('/documento/:id', DocumentoController.atualizar.bind(DocumentoController));
routes.delete('/documento/:id', DocumentoController.deletar.bind(DocumentoController));

// CRUD Movimentacao
routes.get('/movimentacoes', MovimentacaoController.listar.bind(MovimentacaoController));
routes.get('/movimentacoes/:id', MovimentacaoController.findById.bind(MovimentacaoController));
routes.post('/movimentacoes', MovimentacaoController.salvar.bind(MovimentacaoController));
routes.put('/movimentacoes/:id', MovimentacaoController.atualizar.bind(MovimentacaoController));
routes.delete('/movimentacoes/:id', MovimentacaoController.deletar.bind(MovimentacaoController));

module.exports = routes;
