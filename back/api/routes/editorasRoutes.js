const controllerEditoras = require('../controllers/editorasControllers.js');

server.get('/editoras', controllerEditoras.editorasMenu) 

server.get('/editoras/listar', controllerEditoras.editorasGetAll) 

server.get('/editoras/consultar/:codigo', controllerEditoras.editorasGetById) 

server.get('/editoras/ativoInativo/:codigo', controllerEditoras.editorasAtivoInativo) 