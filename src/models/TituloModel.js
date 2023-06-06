const { Model, DataTypes } = require('sequelize');

class Titulo extends Model {
    static init(sequelize){
        super.init(
        {
            data: DataTypes.DATE,
            valororiginal: DataTypes.FLOAT,
            situacao: DataTypes.STRING,
            valoraberto: DataTypes.FLOAT,            
        }, 
        
        {
            sequelize
        });
    }

    static associate(models) {
        Titulo.belongsTo(models.Cliente);
    }
}

module.exports = Titulo;
