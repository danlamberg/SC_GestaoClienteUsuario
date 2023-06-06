const { Model, DataTypes } = require('sequelize');
const Movimentacao = require('./MovimentacaoModel');

class Deposito extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.INTEGER,
        filial: DataTypes.INTEGER,

      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    // Definir a associação "hasMany" com o modelo de destino Movimentacao
    this.hasMany(models.Movimentacao, { foreignKey: 'depositoId', as: 'movimentacoes' });
  }
}

module.exports = Deposito;
