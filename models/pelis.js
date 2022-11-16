const { DataTypes, Mdoel, Model } = require('sequelize');
const sequelize = require('../db/db');
const { init } = require('./pelis');

class Peli extends Model { };
module.exports = (sequelize, DataTypes) => {

Peli.init({
    id_peli: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING,
        validate: {
            len: [1, 25]
        }
    },
    genero: {
        type: DataTypes.STRING,
        validate: {
            len: [1, 20]
        }
    },
    rating: DataTypes.INTEGER
},{
    sequelize,
    modelName: 'Peli',
    freezeTableName: true,
    timestamps: false
});

return Peli;
}