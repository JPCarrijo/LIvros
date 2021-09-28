// Funções ficam no Controller
const editorasModels = require('../models/editorasModels.js')

module.exports = {
    editorasMenu,
    editorasGetAll,
};


function editorasMenu(req, res) {
    console.log(`Rota Editoras Encontrada`);
    res.json(`Rota Editoras Encontrada`)
}

function editorasGetAll(req, res) {
    console.log(`Listar Editoras { Models }`);
    //res.json(`Listar Autores { Models }`)
    editorasModels.getAllEditoras(function(err, resposta) {
        console.log(`Retorno de Editoras { Models }`);
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}