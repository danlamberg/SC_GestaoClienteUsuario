const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize){
        super.init({
            cpf: DataTypes.BIGINT,
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
        },         
        {
            sequelize
        });
    }

    static associate(models) {
        Cliente.hasMany(models.Movimentacao);
        Cliente.hasMany(models.Titulo);
    }
}

module.exports = Cliente;
