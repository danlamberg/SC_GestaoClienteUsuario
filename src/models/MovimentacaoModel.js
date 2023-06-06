const { Model, DataTypes } = require('sequelize');

class Movimentacao extends Model {
    static init(sequelize){
        super.init(
        {
            cpf: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            email: DataTypes.STRING,

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
