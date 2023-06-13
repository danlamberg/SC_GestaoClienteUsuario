const { Model, DataTypes } = require('sequelize');

class Movimentacao extends Model {
    static init(sequelize){
        super.init(
        {
            tipo: DataTypes.STRING,
            data: DataTypes.DATE,
            valor: DataTypes.FLOAT,

        }, 
        {
            sequelize
        });
    }

    static associate(models) {
        Movimentacao.belongsTo(models.Cliente);
    }
}

module.exports = Movimentacao;
