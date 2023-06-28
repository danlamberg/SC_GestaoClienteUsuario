const { Model, DataTypes } = require('sequelize');
const Movimentacao = require('./MovimentacaoModel');

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,
        preco: DataTypes.FLOAT,
        
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    // Definir a associação "hasMany" com o modelo de destino Movimentacao
    this.hasMany(models.Movimentacao, { foreignKey: 'produtoId', as: 'movimentacoes' });
  }
}

module.exports = Produto;
