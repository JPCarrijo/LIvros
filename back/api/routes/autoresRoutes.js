const controllerAutores = require('../controllers/autoresControllers.js');

server.get('/autores', controllerAutores.autoresMenu) 

server.get('/autores/listar', controllerAutores.autoresGetAll) 

server.get('/autores/consultar/:codigo', controllerAutores.autoresGetById) 

server.get('/autores/ativoInativo/:codigo', controllerAutores.autoresAtivoInativo) 