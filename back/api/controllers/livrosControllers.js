// Funções ficam no Controller
const livrosModels = require('../models/livrosModels.js')

module.exports = {
    livrosMenu,
    livrosGetAll,
};


function livrosMenu(req, res) {
    console.log(`Rota Livros Encontrada`);
    res.json(`Rota LIvros Encontrada`)
}

function livrosGetAll(req, res) {
    console.log(`Listar Livros { Models }`);
    //res.json(`Listar Autores { Models }`)
    livrosModels.getAllLivros(function(err, resposta) {
        console.log(`Retorno de Livros { Models }`);
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}