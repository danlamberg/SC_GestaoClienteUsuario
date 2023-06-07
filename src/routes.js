const express = require('express');
const { body } = require('express-validator');
const ClienteController = require('./controllers/ClienteController');
const ProdutoController = require('./controllers/ProdutoController');
const DocumentoController = require('./controllers/DocumentoController');
const { validateDocumento } = require('./controllers/DocumentoController');
const { autentica } = require('../src/services/auth');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Servidor de Clientes!');
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

//CRUD Cliente
routes.get('/cliente', ClienteController.listar);
routes.get('/cliente/:id', ClienteController.findByid);
routes.post('/cliente', ClienteController.cadastrar);
routes.put('/cliente', ClienteController.atualizar);
routes.delete('/cliente/:id', ClienteController.deletar);

//CRUD Produto
routes.get('/produto', ProdutoController.listar);
routes.get('/produto/:id', ProdutoController.findByid);
routes.post('/produto', ProdutoController.cadastrar);
routes.put('/produto', ProdutoController.atualizar);
routes.delete('/produto/:id', ProdutoController.deletar);

//CRUD Documento
// routes.get('/documento', DocumentoController.listar);
// routes.get('/documento/:id', DocumentoController.findByid);
// routes.post('/documento', validateDocumento, DocumentoController.cadastrar);
// routes.put('/documento/:id', DocumentoController.atualizar);
// routes.delete('/documento/:id', DocumentoController.deletar);

module.exports = routes;