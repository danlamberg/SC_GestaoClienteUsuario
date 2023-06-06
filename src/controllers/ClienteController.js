const Cliente = require('../models/ClienteModel');
                                                                                           
module.exports = {
    async listar(req, res) {
        const cliente = await Cliente.findAll();
        return res.json(cliente)
    },

    async findByid(req, res){
        const { id } = req.params;
        const cliente = await Cliente.findAll({
            where: {
                id: id
            }
        });
        return res.json(cliente)
    },

    async cadastrar(req, res){
        const { id, cpf, nome, email} = req.body;
        const cliente = await Cliente.create({
            id, cpf, nome, email
        });        
        return res.json(cliente);
    },

    async atualizar(req, res){
        const { id, cpf, nome, email } = req.body;
        const cliente = await Cliente.update({
            cpf, nome, email
        },
        {
            where: {
                id: id,
            }
        });
        return res.json(cliente)
    },

    async deletar(req, res){
        const { id } = req.params;
        const cliente = await Cliente.destroy({
            where: {
                id: id
            }
        });
        return res.json(cliente);
    }
};





