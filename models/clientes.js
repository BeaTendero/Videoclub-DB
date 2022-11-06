const{ DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');
const { init } = require('./clientes')

class Cliente extends Model {};

Cliente.init({
    mail: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
            isEmail: true,
            len: [1, 100]
        },
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            len: [1, 25]
        }
    },
    userName: {
        type: DataTypes.STRING,
        validate: {
            len: [1, 40]
        }
    },
    rol: DataTypes.STRING
},{
    sequelize,
    modelName: 'Cliente',
    freezeTableName: true,
    timestamps: false
});

module.exports = Cliente;