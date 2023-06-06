const Documento = require('../models/DocumentoModel');
                                                                                           
module.exports = {
    async listar(req, res) {
        const documento = await Documento.findAll();
        return res.json(documento)
    },

    async findByid(req, res){
        const { id } = req.params;
        const documento = await Documento.findAll({
            where: {
                id: id
            }
        });
        return res.json(documento)
    },

    async cadastrar(req, res){
        const { id, tipo, data} = req.body;
        const documento = await Documento.create({
            id, tipo, data
        });        
        return res.json(documento);
    },

    async atualizar(req, res){
        const { id, tipo, data } = req.body;
        const documento = await Documento.update({
            tipo, data
        },
        {
            where: {
                id: id,
            }
        });
        return res.json(documento)
    },

    async deletar(req, res){
        const { id } = req.params;
        const documento = await Documento.destroy({
            where: {
                id: id
            }
        });
        return res.json(documento);
    }
};



