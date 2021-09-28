const controllerEditoras = require('../controllers/editorasControllers.js');

server.get('/editoras', controllerEditoras.editorasMenu) 

server.get('/editoras/listar', controllerEditoras.editorasGetAll) 