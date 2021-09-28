var conexao = require('../../config/conexao.js')

module.exports = {
    getAllLivros,
}

function getAllLivros (callback) {
    conexao.query(`select * from livros`, callback)
}