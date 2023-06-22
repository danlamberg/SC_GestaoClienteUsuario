const Cliente = require('../models/ClienteModel');
const { Op } = require('sequelize');

module.exports = {
  async listar(req, res) {
    try {
      const clientes = await Cliente.findAll();
      return res.json(clientes);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar os clientes' });
    }
  },

  async findById(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Cliente.findByPk(id);

      if (cliente) {
        return res.json(cliente);
      } else {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar o cliente' });
    }
  },

  async cadastrar(req, res) {
    const { id, cpf, nome, email } = req.body;

    try {
      // Verificar se o CPF já está cadastrado
      const clienteExistente = await Cliente.findOne({
        where: {
          cpf: String(cpf) // Converter para string e manter o zero à esquerda
        }
      });

      if (clienteExistente) {
        return res.status(400).json({ error: 'CPF já cadastrado' });
      }

      const cliente = await Cliente.create({
        id,
        cpf: String(cpf), // Converter para string e manter o zero à esquerda
        nome,
        email
      });

      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao cadastrar o cliente' });
    }
  },

  async atualizar(req, res) {
    const { id, cpf, nome, email } = req.body;

    try {
      const clienteExistente = await Cliente.findByPk(id);

      if (!clienteExistente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      // Verificar se o CPF já está cadastrado para outro cliente
      const clienteComOutroCpf = await Cliente.findOne({
        where: {
          cpf: String(cpf), // Converter para string e manter o zero à esquerda
          id: { [Op.ne]: id } // Excluir o cliente atual da verificação
        }
      });

      if (clienteComOutroCpf) {
        return res.status(400).json({ error: 'CPF já cadastrado para outro cliente' });
      }

      await Cliente.update(
        { cpf: String(cpf), nome, email }, // Converter para string e manter o zero à esquerda
        { where: { id } }
      );

      const clienteAtualizado = await Cliente.findByPk(id);
      return res.json(clienteAtualizado);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar o cliente' });
    }
  },

  async deletar(req, res) {
    const { id } = req.params;

    try {
      const clienteExistente = await Cliente.findByPk(id);

      if (!clienteExistente) {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }

      await Cliente.destroy({ where: { id } });
      return res.json({ message: 'Cliente deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar o cliente' });
    }
  }
};
