const express = require('express');
const ClienteController = require('./controllers/ClienteController');
const ProdutoController = require('./controllers/ProdutoController');
const DocumentoController = require('./controllers/DocumentoController');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Servidor de Clientes!')
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
routes.get('/documento', DocumentoController.listar);
routes.get('/documento/:id', DocumentoController.findByid);
routes.post('/documento', DocumentoController.cadastrar);
routes.put('/documento', DocumentoController.atualizar);
routes.delete('/documento/:id', DocumentoController.deletar);

module.exports = routes;