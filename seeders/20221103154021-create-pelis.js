'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('pelis', [
      {
        Titulo: 'Transformers',
        Genero: 'Acción',
        rating: 8,
        
        
      },  {
        Titulo: 'Pokemón',
        Genero: 'Animación',
        rating: 6,
        
        
      },  {
        Titulo: 'Demon Slayer',
        Genero: 'Animación',
        rating: 9,
        
        
      },  {
        
        Titulo: 'Top Gun',
        Genero: 'Acción',
        rating: 7.5,
        
        
      },  {
        Titulo: 'Avatar',
        Genero: 'Ficción',
        rating: 9,
        
        
      },  {
        Titulo: 'Los Minions',
        Genero: 'Animación',
        rating: 8.5,
        
        
      },  {
        Titulo: 'Batman',
        Genero: 'Ficción',
        rating: 8,
        
        
      },  {
        Titulo: 'Padre no hay mas que uno',
        Genero: 'Comedia',
        rating: 7,
        
        
      },  {
        Titulo: 'Harry Potter',
        Genero: 'Ficción',
        rating: 8,
        
        
      },  {
        Titulo: 'Sucide Squad',
        Genero: 'Acción',
        rating: 7,
        
        
      },  {
        Titulo: 'Shrek',
        Genero: 'Animación',
        rating: 9,
        
        
      },  {
        Titulo: 'Piratas del caribe',
        Genero: 'Fantasía',
        rating: 8,
        
        
      }, {
        Titulo: 'Fast and furious 9',
        Genero: 'Acción',
        rating: 7.5,
        
        
      },  {
        Titulo: 'Insidious',
        Genero: 'Terror',
        rating: 8,
        
        
      },
       {
        Titulo: 'Harry Potter',
        Genero: 'Ficción',
        rating: 8,
        
        
      },  {
        Titulo: 'Sucide Squad',
        Genero: 'Acción',
        rating: 7,
        
        
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
     
  }
};
