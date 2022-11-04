'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pedido.belongsTo(models.producto, { foreignKey: 'id_producto' })
      pedido.belongsTo(models.cliente, { foreignKey: 'id_cliente' })
    }
  }
  pedido.init({
    id_pedido: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    fecha: DataTypes.DATE,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pedido',
  });
  return pedido;
};