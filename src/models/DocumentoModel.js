const { Model, DataTypes } = require('sequelize');
const Movimentacao = require('./MovimentacaoModel');

class Documento extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo: DataTypes.STRING,
        data: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    // Definir a associação "hasMany" com o modelo de destino Movimentacao
    this.hasMany(models.Movimentacao, { foreignKey: 'documentoId', as: 'movimentacoes' });
  }
}

module.exports = Documento;
