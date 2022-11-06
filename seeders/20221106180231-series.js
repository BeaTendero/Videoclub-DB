'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('series', [
      {
        Titulo: 'La casa de Papel',
        Genero: 'Drama',
        rating: 9,
        capitulo: false,
        teatro: false
        
        
      },{
        Titulo: 'Demon Slayer',
        Genero: 'Animación',
        rating: 9.5,
        capitulo: true,
        teatro: false
        
        
      },{
        Titulo: 'Dahmer',
        Genero: 'Suspense',
        rating: 8.5,
        capitulo: true,
        teatro: false
        
        
      },{
        Titulo: 'The Boys',
        Genero: 'Acción',
        rating: 10,
        capitulo: false,
        teatro: true
        
        
      },{
        Titulo: 'Niquelao',
        Genero: 'Comedia',
        rating: 8,
        capitulo: false,
        teatro: false
        
        
      },{
        Titulo: 'Los simpsons',
        Genero: 'Animación',
        rating: 10,
        capitulo: false,
        teatro: false
        
        
      },{
        Titulo: 'Lucifer',
        Genero: 'Fantasía',
        rating: 7.5,
        capitulo: false,
        teatro: false
        
        
      },{
        Titulo: 'Padre de familia',
        Genero: 'Animación',
        rating: 7,
        capitulo: false,
        teatro: false
        
        
      },{
        Titulo: 'Strange Things',
        Genero: 'Terror',
        rating: 8,
        capitulo: true,
        teatro: false
        
        
      },{
        Titulo: 'Doctor Who',
        Genero: 'Fantasía',
        rating: 6,
        capitulo: false,
        teatro: false
        
        
      },{
        Titulo: 'The big bang theory',
        Genero: 'Comedia',
        rating: 9,
        capitulo: true,
        teatro: true
        
        
      },{
        Titulo: 'Aquí no hay quien viva',
        Genero: 'Comedia',
        rating: 10,
        capitulo: false,
        teatro: false
        
        
      }
      ,{
        Titulo: 'Los anillos del poder',
        Genero: 'Fantasía',
        rating: 3,
        capitulo: true,
        teatro: false
        
        
      },{
        Titulo: 'Arcane',
        Genero: 'Fantasía',
        rating: 7.5,
        capitulo: true,
        teatro: false
        
        
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     
  }
};