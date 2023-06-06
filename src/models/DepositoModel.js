const { Model, DataTypes } = require('sequelize');

class Deposito extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            filial: DataTypes.STRING,
        }, 
        
        {
            sequelize
        })
    }
}

module.exports = Deposito;
