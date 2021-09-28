// Funções ficam no Controller
const autoresModels = require('../models/autoresModels.js')

module.exports = {
    autoresMenu,
    autoresGetAll,
};


function autoresMenu(req, res) {
    console.log(`Rota Autores Encontrada`);
    res.json(`Rota Autores Encontrada`)
}

function autoresGetAll(req, res) {
    console.log(`Listar Autores { Models }`);
    //res.json(`Listar Autores { Models }`)
    autoresModels.getAllAutores(function(err, resposta) {
        console.log(`Retorno de Autores { Models }`);
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}