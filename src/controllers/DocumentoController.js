const DocumentoModel = require('../models/DocumentoModel');

const DocumentoController = {
  listar: async (req, res) => {
    try {
      const documentos = await DocumentoModel.findAll();
      return res.json(documentos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar os documentos' });
    }
  },

  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const documento = await DocumentoModel.findByPk(id);
      if (!documento) {
        return res.status(404).json({ error: 'Documento não encontrado' });
      }
      return res.json(documento);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar o documento' });
    }
  },

  cadastrar: async (req, res) => {
    try {
      const { tipo, data } = req.body;
      const documento = await DocumentoModel.create({ tipo, data });
      return res.status(201).json(documento);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao cadastrar o documento' });
    }
  },

  atualizar: async (req, res) => {
    const { id } = req.params;
    try {
      const documentoExistente = await DocumentoModel.findByPk(id);
      if (!documentoExistente) {
        return res.status(404).json({ error: 'Documento não encontrado' });
      }

      const { tipo, data } = req.body;
      await documentoExistente.update({ tipo, data });
      return res.json({ message: 'Documento atualizado com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar o documento' });
    }
  },

  deletar: async (req, res) => {
    const { id } = req.params;
    try {
      const documentoExistente = await DocumentoModel.findByPk(id);
      if (!documentoExistente) {
        return res.status(404).json({ error: 'Documento não encontrado' });
      }

      await documentoExistente.destroy();
      return res.json({ message: 'Documento deletado com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao deletar o documento' });
    }
  },
};

module.exports = DocumentoController;
