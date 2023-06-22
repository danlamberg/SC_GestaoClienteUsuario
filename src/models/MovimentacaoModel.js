const { Model, DataTypes } = require('sequelize');
const ItemMovimentacao = require('../models/ItemMovimentoModel');

class Movimentacao extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        data: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        valor: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
      },
      {
        tableName: 'movimentacoes',
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.ItemMovimentacao, { foreignKey: 'movimentacaoId' });
    this.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
    this.belongsTo(models.Deposito, { foreignKey: 'depositoId' });
  }
}

module.exports = Movimentacao;
