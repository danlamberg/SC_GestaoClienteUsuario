const MovimentacaoModel = require('../models/MovimentacaoModel');
const ItemMovimentoModel = require('../models/ItemMovimentoModel');
const ProdutoModel = require('../models/ProdutoModel');
const ItemMovimentoController = require('../controllers/ItemMovimentoController');

const MovimentacaoController = {
  salvar: async (req, res) => {
    const { tipo, data, valor, tituloId, clienteId, depositoId, documentoId } = req.body;

    try {
      const movimentacao = await MovimentacaoModel.create({ tipo, data, valor, tituloId, clienteId, depositoId, documentoId });
      return res.status(201).json(movimentacao);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao salvar a movimentação' });
    }
  },

  listar: async (req, res) => {
    try {
      const movimentacoes = await MovimentacaoModel.findAll();
      return res.json(movimentacoes);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar as movimentações' });
    }
  },

  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const movimentacao = await MovimentacaoModel.findByPk(id);
      if (!movimentacao) {
        return res.status(404).json({ error: 'Movimentação não encontrada' });
      }
      return res.json(movimentacao);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar a movimentação' });
    }
  },

  atualizar: async (req, res) => {
    const { id } = req.params;
    try {
      const movimentacaoExistente = await MovimentacaoModel.findByPk(id);
      if (!movimentacaoExistente) {
        return res.status(404).json({ error: 'Movimentação não encontrada' });
      }

      const { tipo, data, valor, tituloId, clienteId, depositoId, documentoId } = req.body;
      await movimentacaoExistente.update({ tipo, data, valor, tituloId, clienteId, depositoId, documentoId });
      return res.json({ message: 'Movimentação atualizada com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar a movimentação' });
    }
  },

  deletar: async (req, res) => {
    const { id } = req.params;
    try {
      const movimentacaoExistente = await MovimentacaoModel.findByPk(id);
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
