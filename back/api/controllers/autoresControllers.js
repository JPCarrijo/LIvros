// Funções ficam no Controller
const autoresModels = require('../models/autoresModels.js')

module.exports = {
    autoresMenu,
    autoresGetAll,
    autoresGetById,
    autoresAtivoInativo,
};


function autoresMenu(req, res) {
    console.log(`Rota Autores Encontrada`);
    res.json(`Rota Autores Encontrada`)
}

function autoresGetAll(req, res) {
    console.log(`Listar Autores { Models }`);
    //res.json(`Listar Autores { Models }`)
    autoresModels.getAllAutores(function(err, resposta) {
        console.log(`Retorno de Autores { Models }, resposta`, resposta);
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function autoresGetById(req, res) {
    console.log(`Consulta Autores { M O D E L S }`);
    const id = req.params.codigo;
   
    console.log(`Parâmetro Esperado: ${id}`);
    autoresModels.getByIdAutores(id, function(err, resposta) {
        console.log(`Retorno de Autores { M O D E L S }\n`, resposta);
        if(err) {
            throw err;
        } else {
            res.json(resposta)
        }
       
    })
}
function autoresAtivoInativo(req, res) {
    console.log(`Ativar Inativar Autores { M O D E L S }`);
    const id = req.params.codigo;
    let p_ativo = ''

    console.log(`Parâmetro Esperado: ${id}`);
    autoresModels.getByIdAutores(id, function(err, resposta) {
        console.log(`Retorno de Autores Ativo/Inativo: `, resposta[0].aut_ativoinativo);
        p_ativo = resposta[0].aut_ativoinativo;

        if(err) throw err;
        else {
            if(p_ativo == 'A') p_ativo = 'I'
            else p_ativo = 'A'
            //res.json(resposta)
        }
        console.log(`A/I: ${p_ativo}`);
        autoresModels.ativarInativar(id, p_ativo, function(err, result) {
            if(err) throw err
            console.log(`Registro Atualizado!!!`);
            res.redirect(`/autores/listar/`)

            //res.json(result)
        })
    })
}