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

    return Documento; // Adicione essa linha para retornar a classe do modelo
  }

  static associate(models) {
    // Definir a associação "hasMany" com o modelo de destino Movimentacao
    this.hasMany(models.Movimentacao, { foreignKey: 'documentoId', as: 'movimentacoes' });
  }
}

module.exports = Movimentacao;
