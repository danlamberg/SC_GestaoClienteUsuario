const { Model, DataTypes } = require('sequelize');

class ItemMovimentacao extends Model {
  static init(sequelize) {
    super.init(
      {
        quantidade: DataTypes.INTEGER,
        //valorunitario
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    // Defina as associações aqui, por exemplo:
    this.belongsTo(models.Movimentacao, { foreignKey: 'movimentacaoId', as: 'movimentacao' });
    //relacionar com produtoId, movimentoId
  }
}

module.exports = ItemMovimentacao;
