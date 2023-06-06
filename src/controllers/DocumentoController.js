// const { body, validationResult } = require('express-validator');
// const Documento = require('../models/DocumentoModel');

// module.exports = {
//   listar(req, res) {
//     try {
//       const documento = Documento.findAll();
//       return res.json(documento);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Erro ao listar os documentos' });
//     }
//   },

//   findByid(req, res) {
//     const { id } = req.params;
//     try {
//       const documento = Documento.findByPk(id);
//       if (!documento) {
//         return res.status(404).json({ error: 'Documento não encontrado' });
//       }
//       return res.json(documento);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Erro ao buscar o documento' });
//     }
//   },

//   cadastrar: [
//     body('tipo').notEmpty().isString(),
//     body('data').notEmpty().isDate(),
//     async (req, res) => {
//       try {
//         const { id, tipo, data } = req.body;
//         const documento = await Documento.create({ id, tipo, data });
//         return res.status(201).json(documento);
//       } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Erro ao cadastrar o documento' });
//       }
//     },
//   ],

//   atualizar: [
//     body('tipo').notEmpty().isString(),
//     body('data').notEmpty().isDate(),
//     async (req, res) => {
//       const { id, tipo, data } = req.body;
//       try {
//         const documentoExistente = await Documento.findByPk(id);
//         if (!documentoExistente) {
//           return res.status(404).json({ error: 'Documento não encontrado' });
//         }
//         await Documento.update({ tipo, data }, { where: { id } });
//         return res.json({ message: 'Documento atualizado com sucesso' });
//       } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Erro ao atualizar o documento' });
//       }
//     },
//   ],

//   deletar: async (req, res) => {
//     const { id } = req.params;
//     try {
//       const documentoExistente = await Documento.findByPk(id);
//       if (!documentoExistente) {
//         return res.status(404).json({ error: 'Documento não encontrado' });
//       }
//       await documentoExistente.destroy();
//       return res.json({ message: 'Documento deletado com sucesso' });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: 'Erro ao deletar o documento' });
//     }
//   },
// };
