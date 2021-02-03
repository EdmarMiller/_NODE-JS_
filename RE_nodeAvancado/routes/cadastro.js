module.exports = function (app) {

    app.get('/cadastro', function (req, res) {
        res.render('./pages/cadastro');
    });

    app.post('/cadastro/salvar', function (req, res) {
        var dados = req.body;
        console.log(dados);
        var connection = app.config.db_conn();
        var conteudoModel = app.models.conteudoModel;

        conteudoModel.salvarConteudo(dados, connection, function (error, results) {

        });

        conteudoModel.getConteudo(connection,
            function (error, results, fields) {
                console.log(error, results)
                res.render('./pages/cadastro', { dados: results });
            });
    });
}