const Movimentacao = require('../models/MovimentacaoModel');

const MovimentacaoController = {
  listar: async (req, res) => {
    try {
      const movimentacoes = await Movimentacao.findAll();
      return res.json(movimentacoes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar as movimentações' });
    }
  },

  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const movimentacao = await Movimentacao.findByPk(id);
      if (!movimentacao) {
        return res.status(404).json({ error: 'Movimentação não encontrada' });
      }
      return res.json(movimentacao);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar a movimentação' });
    }
  },

  cadastrar: async (req, res) => {
    try {
      const { cpf, nome, email } = req.body;
      const movimentacao = await Movimentacao.create({ cpf, nome, email });
      return res.status(201).json(movimentacao);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao cadastrar a movimentação' });
    }
  },

  atualizar: async (req, res) => {
    const { id } = req.params;
    try {
      const movimentacaoExistente = await Movimentacao.findByPk(id);
      if (!movimentacaoExistente) {
        return res.status(404).json({ error: 'Movimentação não encontrada' });
      }

      const { cpf, nome, email } = req.body;
      await movimentacaoExistente.update({ cpf, nome, email });
      return res.json({ message: 'Movimentação atualizada com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar a movimentação' });
    }
  },

  deletar: async (req, res) => {
    const { id } = req.params;
    try {
      const movimentacaoExistente = await Movimentacao.findByPk(id);
      if (!movimentacaoExistente) {
        return res.status(404).json({ error: 'Movimentação não encontrada' });
      }

      await movimentacaoExistente.destroy();
      return res.json({ message: 'Movimentação deletada com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao deletar a movimentação' });
    }
  },
};

module.exports = MovimentacaoController;
