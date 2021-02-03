const mysql = require('mysql');

const db_conn = function(){
     console.log("Conexao com BD estabelecida.");
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'projeto_node'
     
    });
  
}

module.exports = function() {
  return db_conn
};

