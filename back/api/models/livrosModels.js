var conexao = require('../../config/conexao.js')

module.exports = {
    getAllLivros,
    getByIdLivros,
    ativarInativar
}

function getAllLivros(callback) {
  conexao.query('select * from livros as l inner join editoras as e on l.liv_codigo = e.edt_codigo inner join autores as a on a.aut_codigo = l.liv_codigo', callback);

};

function getByIdLivros(id, callback) {
  conexao.query(`select * from livros where liv_codigo = ${id}`, callback)
}

function ativarInativar (id, ativo, callback) {
  console.log(`Livros Ativando/Inativando Registro ${id} - ${ativo}`);

  const m_sql = `update livros set liv_ativoinativo = '${ativo}' where liv_codigo = '${id}'`
  conexao.query(m_sql, callback);

  console.log(`Retornando { M O D E L S } Livros Ativando/Inativando Registro ${id} - Status: ${ativo}`);
}
