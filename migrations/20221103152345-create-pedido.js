'use strict';

const { QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pedidos', {
      id_pedido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      id_producto: { //ponemos los nombres de los campos sin mas, no hay que expecificar la relacion aquí
        type: Sequelize.INTEGER
      },
      id_cliente: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    //con addConstraint, podemos añadir FK, PK y otros campos especiales, en caso de FK es con estas opciones
    //importante que en los models tengamos las fk referenciadas como foreignKey en las relaciones
    await queryInterface.addConstraint('pedidos', {
      fields: ['id_producto'], //la columna en pedidos a la que afecta la FK
      type: 'foreign key',
      name: 'id_producto',
      references: {
        table: 'productos',
        field: 'id_producto'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint('pedidos', {
      fields: ['id_cliente'],
      type: 'foreign key',
      name: 'id_cliente',
      references: {
        table: 'clientes',
        field: 'id_cliente'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pedidos');
  }
};