const controllerIndex = require('../controllers/indexControllers.js');


server.get('/', controllerIndex.indexControllers) 

server.get('/autores', (req, res) => {
    console.log(`Rota Autores Encontrada!`);
    res.json(`Rota Autores Encontrada!`);
})