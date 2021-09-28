// Funções ficam no Controller

module.exports = {
    indexControllers,
};


function indexControllers(req, res) {
    console.log(`Rota Raiz Encontradas`);
    res.json(`Rota Raiz Encontrada`)
}