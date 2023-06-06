const { Model, DataTypes } = require('sequelize');
const ItemMovimento = require('./ItemMovimentoModel');

class Movimentacao extends Model {
    static init(sequelize){
        super.init({
            cpf: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
        }, 
        
        {
            sequelize
        })
    }
}
Movimentacao.hasMany(ItemMovimento);

module.exports = Movimentacao;