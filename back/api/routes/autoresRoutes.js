const controllerAutores = require('../controllers/autoresControllers.js');

server.get('/autores', controllerAutores.autoresMenu) 

server.get('/autores/listar', controllerAutores.autoresGetAll) 

