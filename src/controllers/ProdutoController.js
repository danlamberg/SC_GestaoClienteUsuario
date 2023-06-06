const Produto = require('../models/ProdutoModel');
                                                                                           
module.exports = {
    async listar(req, res) {
        const produto = await Produto.findAll();
        return res.json(produto)
    },

    async findByid(req, res){
        const { id } = req.params;
        const produto = await Produto.findAll({
            where: {
                id: id
            }
        });
        return res.json(produto)
    },

    async cadastrar(req, res) {
        try {
          const { nome, descricao } = req.body;
          const produto = await Produto.create({
            nome,
            descricao
          });
          return res.json(produto);
        } catch (error) {
          return res.status(500).json({ error: 'Erro ao cadastrar o produto' });
        }
      },        

      async atualizar(req, res) {
        try {
          const { id, nome, descricao } = req.body;
          const produtoExistente = await Produto.findByPk(id);
          if (!produtoExistente) {
            return res.status(404).json({ error: 'Produto não encontrado' });
          }
          const produtoAtualizado = await Produto.update(
            { nome, descricao },
            { where: { id } }
          );
          return res.json(produtoAtualizado);
        } catch (error) {
          return res.status(500).json({ error: 'Erro ao atualizar o produto' });
        }
    },
      
    async deletar(req, res) {
        try {
          const { id } = req.params;
          const produtoExistente = await Produto.findByPk(id);
          if (!produtoExistente) {
            return res.status(404).json({ error: 'Produto não encontrado' });
          }
          await Produto.destroy({ where: { id } });
          return res.json({ message: 'Produto deletado com sucesso' });
        } catch (error) {
          return res.status(500).json({ error: 'Erro ao deletar o produto' });
        }
    }
};



