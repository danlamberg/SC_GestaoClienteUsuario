const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
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

module.exports = Cliente;