const controllerLivros = require('../controllers/livrosControllers.js');

server.get('/livros', controllerLivros.livrosMenu) 

server.get('/livros/listar', controllerLivros.livrosGetAll)

server.get('/livros/consultar/:codigo', controllerLivros.livrosGetById) 

server.get('/livros/ativoInativo/:codigo', controllerLivros.livrosAtivoInativo) 