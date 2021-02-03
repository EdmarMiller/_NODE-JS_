module.exports = function(){

    this.getConteudo = function(connection, callback){
        connection.query("SELECT * FROM conteudo", callback);
    }
    this.getConteudoFront = function(connection, callback){
        connection.query("SELECT * FROM conteudo WHERE categoria = 'FRONT'", callback);
    }
    this.getConteudoBack = function(connection, callback){
        connection.query("SELECT * FROM conteudo WHERE categoria = 'BACK'", callback);
    }

    this.salvarConteudo = function(conteudo, connection, callback){
        connection.query("INSERT INTO conteudo SET ?", conteudo);
    }

    return this;
}