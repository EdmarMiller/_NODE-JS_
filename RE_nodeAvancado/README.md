# _nodeJS_

1- Criar página com pelo menos 2 campos no formulário.  
2- Criar nova interface para processamento e retorno dos dados (apresentar valores enviados através do formulário).  
3- Utilizar no projeto o CommonJs para organização.

**Creating database and table**

```SQL
create database node_crud_users;

use node_crud_users;

CREATE TABLE users (
id int(11) NOT NULL auto_increment,
name varchar(100) NOT NULL,
age int(3) NOT NULL,
email varchar(100) NOT NULL,
PRIMARY KEY (id)
);
```
