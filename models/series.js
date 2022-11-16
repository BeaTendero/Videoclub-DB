'use strict';

const { DataTypes, Mdoel, Model } = require('sequelize');
const sequelize = require('../db/db');
const { init } = require('./series');

class Serie extends Model { };
module.exports = (sequelize, DataTypes) => {


Serie.init({
    id_serie: {
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
    rating: DataTypes.INTEGER,
    capitulo: DataTypes.BOOLEAN,
    teatro: DataTypes.BOOLEAN,
},{
    sequelize,
    modelName: 'Serie',
    freezeTableName: true,
    timestamps: false
});

return Serie;
}