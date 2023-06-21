const Produto = require('../models/ProdutoModel');

module.exports = {
  async listar(req, res) {
    try {
      const produtos = await Produto.findAll();
      const produtosFormatados = produtos.map(produto => ({
        ...produto.dataValues,
        preco: formatarPreco(produto.preco)
      }));
      return res.json(produtosFormatados);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar os produtos' });
    }
  },

  async findByid(req, res) {
    try {
      const { id } = req.params;
      const produto = await Produto.findByPk(id);

      if (produto) {
        return res.json({ ...produto.dataValues, preco: formatarPreco(produto.preco) });
      } else {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar o produto' });
    }
  },

  async cadastrar(req, res) {
    try {
      const { nome, descricao, quantidade, preco } = req.body;
      const produto = await Produto.create({
        nome,
        descricao,
        quantidade,
        preco
      });
      return res.json({ ...produto.dataValues, preco: formatarPreco(produto.preco) });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao cadastrar o produto' });
    }
  },

  async atualizar(req, res) {
    try {
      const { id, nome, descricao, quantidade, preco } = req.body;
      const produtoExistente = await Produto.findByPk(id);
      if (!produtoExistente) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }
      await Produto.update(
        { nome, descricao, quantidade, preco },
        { where: { id } }
      );
      const produtoAtualizado = await Produto.findByPk(id);
      return res.json({ ...produtoAtualizado.dataValues, preco: formatarPreco(produtoAtualizado.preco) });
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

function formatarPreco(preco) {
  const precoFormatado = `R$ ${preco.toFixed(2)} reais`;
  return preco === 1 ? precoFormatado.replace('reais', 'real') : precoFormatado;
};
