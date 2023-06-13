const express = require('express');
const { body } = require('express-validator');
const ClienteController = require('./controllers/ClienteController');
const ProdutoController = require('./controllers/ProdutoController');
const DocumentoController = require('./controllers/DocumentoController');
const MovimentacaoController = require('./controllers/MovimentacaoController');
const UsuarioController = require('./controllers/UsuarioController');

const { autentica } = require('./services/auth');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Servidor de Gestão!');
});

// Rota de login com autenticação JWT
routes.post('/login', async (req, res) => {
  const { nome, senha } = req.body;

  try {
    // Chama a função autentica do auth.js para realizar a autenticação
    const usuario = await autentica({ nome, senha });

    if (usuario.auth) {
      res.json({ auth: true, token: usuario.token });
    } else {
      res.status(401).json({ auth: false, message: 'Credenciais inválidas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Ocorreu um erro no servidor' });
  }
});
// CRUD de Usuário
routes.get('/', UsuarioController.listar);
routes.get('/validar', UsuarioController.validarToken);
routes.post('/', UsuarioController.salvar);
routes.get('/usuario:id', UsuarioController.buscarPorId);
routes.put('/:id', UsuarioController.atualizar);
routes.delete('/:id', UsuarioController.excluir);

//CRUD Cliente
routes.get('/cliente', ClienteController.listar.bind(ClienteController));
routes.get('/cliente/:id', ClienteController.findByid.bind(ClienteController));
routes.post('/cliente', ClienteController.cadastrar.bind(ClienteController));
routes.put('/cliente', ClienteController.atualizar.bind(ClienteController));
routes.delete('/cliente/:id', ClienteController.deletar.bind(ClienteController));

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
routes.post('/movimentacoes', MovimentacaoController.cadastrar.bind(MovimentacaoController));
routes.put('/movimentacoes/:id', MovimentacaoController.atualizar.bind(MovimentacaoController));
routes.delete('/movimentacoes/:id', MovimentacaoController.deletar.bind(MovimentacaoController));

module.exports = routes;
