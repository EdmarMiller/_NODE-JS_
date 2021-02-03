module.exports = function (app) {

    app.get('/back', function (req, res) {

        var connection = app.config.db_conn();

        var query = app.models.conteudoModel;
        query.getConteudoBack(connection,
            function (error, results, fields) {
                console.log(error, results);
                res.render('./pages/back', { dados: results });
               
            });
    });
}