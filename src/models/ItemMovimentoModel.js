const { Model, DataTypes } = require('sequelize');

class ItemMovimentacao extends Model {
  static init(sequelize) {
    super.init(
      {
        quantidade: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    // Defina as associações aqui, por exemplo:
    this.belongsTo(models.Movimentacao, { foreignKey: 'movimentacaoId', as: 'movimentacao' });
  }
}

module.exports = ItemMovimentacao;
