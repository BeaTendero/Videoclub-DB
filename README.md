# Videoclub-DB
Proyecto 04 Base de Datos



Instrucciones🔧
El primer paso para arrancar el proyecto es clonar este repositorio en su repositorio local.

A continuación, debemos instalar las dependencias no incluidas en el repositorio al utilizar el archivo .gitignore. Para ello, debemos introducir en el terminal el siguiente comando:

npm i
Inicializamos Sequelize con el siguiente comando:

sequelize init
Realizamos la migración de los modelos a la base de datos local.

sequelize db:migrate
Levantamos el servidor para acceder al endpoint de clonar peliculas desde Postman.

npm run dev
Clonamos las películas de la API de TMDB para tener películas en nuestra base de datos.

Para ello, en Postman, accedemos al endpoint:

http://localhost:3000/movies/clonar

Volvemos a tirar abajo el servidor

CTRL + C

Ponemos en marcha los seeders.



Modelo de la base de datos

![tablas](https://user-images.githubusercontent.com/114058695/200188286-54d9dbdf-7162-4c44-bc88-c4d0d04f9950.jpg)


