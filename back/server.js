const http = require('http');
const servidor = require('./config/aplicativo')





server.get('/editoras', (req, res) => {
    console.log(`Rota Editoras Encontrada!`);
    res.json(`Rota Editoras Encontrada!`);
})

server.get('/livros', (req, res) => {
    console.log(`Rota Livros Encontrada!`);
    res.json(`Rota Livros Encontrada!`);
})

// Recebe o back
http.createServer(servidor).listen(servidor.get('porta'), function() {
    console.log(`\nServidor Rodando na Porta ${server.get('porta')}`);
});