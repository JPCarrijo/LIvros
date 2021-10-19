// Funções ficam no Controller
const livrosModels = require('../models/livrosModels.js')

module.exports = {
    livrosMenu,
    livrosGetAll,
    livrosGetById,
    livrosAtivoInativo
};


function livrosMenu(req, res) {
    console.log(`Rota Livros Encontrada`);
    res.json(`Rota Livros Encontrada`)
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

function livrosGetById(req, res) {
  console.log(`Consulta Livros { M O D E L S }`);
  const id = req.params.codigo;
 
  console.log(`Parâmetro Esperado: ${id}`);
  livrosModels.getByIdLivros(id, function(err, resposta) {
      console.log(`Retorno de Livros { M O D E L S }\n`, resposta);
      if(err) {
          throw err;
      } else {
          res.json(resposta)
      }
     
  })
}
function livrosAtivoInativo(req, res) {
  console.log(`Ativar Inativar Livros { M O D E L S }`);
  const id = req.params.codigo;
  let p_ativo = ''

  console.log(`Parâmetro Esperado: ${id}`);
  livrosModels.getByIdLivros(id, function(err, resposta) {
      console.log(`Retorno de Livros Ativo/Inativo: `, resposta[0].liv_ativoinativo);
      p_ativo = resposta[0].liv_ativoinativo;

      if(err) throw err;
      else {
          if(p_ativo == 'A') p_ativo = 'I'
          else p_ativo = 'A'
          //res.json(resposta)
      }
      console.log(`A/I: ${p_ativo}`);
      livrosModels.ativarInativar(id, p_ativo, function(err, result) {
          if(err) throw err
          console.log(`Registro Atualizado!!!`);
          res.redirect(`/livros/listar/`)

          //res.json(result)
      })
  })
}