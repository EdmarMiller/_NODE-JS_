module.exports = function (app) {

  app.get('/recebe_mensagem', (req, res) => {

    const connection = app.app.config.db_conn();
    const query = app.app.models.conteudoModel;

    query.getMensagem(connection, function (error, result) {
      res.json(result);
      //console.log(result, error, result);
    });

  });
  
  
  
  app.post('/envia_mensagem', (req, res) => {
    const conteudo = req.body;
    console.log(conteudo)
    const connection = app.app.config.db_conn();
    const conteudoModel = app.app.models.conteudoModel;

    conteudoModel.postMensagem(conteudo, connection, function (error, result) {
      
    });

  });

}
