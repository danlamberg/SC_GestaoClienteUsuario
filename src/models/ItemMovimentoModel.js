const { Model, DataTypes } = require('sequelize');

class ItemMovimento extends Model {
    static init(sequelize){
        super.init({
            quantidade: DataTypes.INTEGER,
        }, 
        
        {
            sequelize
        })
    }
}

module.exports = ItemMovimento;