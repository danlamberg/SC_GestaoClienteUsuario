const { Model, DataTypes } = require('sequelize');

class Documento extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            tipo: DataTypes.STRING,
            data: DataTypes.DATE,
        }, 
        
        {
            sequelize
        })
    }
}

module.exports = Documento;