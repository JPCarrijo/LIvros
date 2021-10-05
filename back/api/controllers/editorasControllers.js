// Funções ficam no Controller
const editorasModels = require('../models/editorasModels.js')

module.exports = {
    editorasMenu,
    editorasGetAll,
    editorasGetById,
    editorasAtivoInativo,
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

function editorasGetById(req, res) {
  console.log(`Consulta Editoras { M O D E L S }`);
  const id = req.params.codigo;
 
  console.log(`Parâmetro Esperado: ${id}`);
  editorasModels.getByIdEditoras(id, function(err, resposta) {
      console.log(`Retorno de Editoras { M O D E L S }\n`, resposta);
      if(err) {
          throw err;
      } else {
          res.json(resposta)
      }
  })
}

function editorasAtivoInativo(req, res) {
  console.log(`Ativar Inativar Autores { M O D E L S }`);
  const id = req.params.codigo;
  let p_ativo = ''

  console.log(`Parâmetro Esperado: ${id}`);
  editorasModels.getByIdEditoras(id, function(err, resposta) {
      console.log(`Retorno de Autores Ativo/Inativo: `, resposta[0].aut_ativoinativo);
      p_ativo = resposta[0].aut_ativoinativo;

      if(err) throw err;
      else {
          if(p_ativo == 'A') p_ativo = 'I'
          else p_ativo = 'A'
          //res.json(resposta)
      }
      console.log(`A/I: ${p_ativo}`);
      editorasModels.ativarInativar(id, p_ativo, function(err, result) {
          if(err) throw err
          console.log(`Registro Atualizado!!!`);
          res.redirect(`/autores/listar/`)

          //res.json(result)
      })
  })
}

