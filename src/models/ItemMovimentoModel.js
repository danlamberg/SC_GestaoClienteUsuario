const { Model, DataTypes } = require('sequelize');

class ItemMovimentacao extends Model {
  static init(sequelize) {
    super.init(
      {
        quantidade: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        valorunitario: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
      },
      {
        tableName: 'itens_movimentacao',
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Movimentacao, {
      foreignKey: 'movimentacaoId',
      as: 'movimentacao',
    });
  }
}

module.exports = ItemMovimentacao;
