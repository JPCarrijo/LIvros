var mysql = require('mysql2');
var database = 'dados212n';

// instanciar objeto de acesso ao banco de dados
var conexao = mysql.createConnection({
    user: 'root',
    password: '130517',
    host: 'localhost',
    port: 3306
});

conexao.connect((err) => {
    if (err) {
        console.log('Erro ao conectar no mysql...', err)
        return
    }
    conexao.query('USE ' + database);
    console.log('\nConexão estabilizada com sucesso!!!')
})

module.exports = conexao;

