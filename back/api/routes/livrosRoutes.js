const controllerLivros = require('../controllers/livrosControllers.js');

server.get('/livros', controllerLivros.livrosMenu) 

server.get('/livros/listar', controllerLivros.livrosGetAll)