const { Model, DataTypes } = require('sequelize');
const Movimentacao = require('./MovimentacaoModel');

class Titulo extends Model {
    static init(sequelize){
        super.init({
            tipo: DataTypes.STRING,
            data: DataTypes.DATE,
            valororiginal: DataTypes.FLOAT,
            situacao: DataTypes.STRING,
            valoraberto: DataTypes.FLOAT,
        }, 
        
        {
            sequelize
        })
    }
}

Titulo.hasMany(Movimentacao);

module.exports = Titulo;
