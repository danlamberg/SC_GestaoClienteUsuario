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

    async cadastrar(req, res){
        const { id, nome, descricao} = req.body;
        const produto = await Produto.create({
            id, nome, descricao
        });        
        return res.json(produto);
    },

    async atualizar(req, res){
        const { id, nome, descricao } = req.body;
        const produto = await Produto.update({
            nome, descricao
        },
        {
            where: {
                id: id,
            }
        });
        return res.json(produto)
    },

    async deletar(req, res){
        const { id } = req.params;
        const produto = await Produto.destroy({
            where: {
                id: id
            }
        });
        return res.json(produto);
    }
};





