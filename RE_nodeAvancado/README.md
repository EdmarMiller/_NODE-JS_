# Node JS - Entrega do trabalho RECODE

1- Criar página com pelo menos 2 campos no formulário.  
2- Criar nova interface para processamento e retorno dos dados (apresentar valores enviados através do formulário).  
3- Utilizar no projeto o CommonJs para organização.

**Creating database and table**

## Banco de Dados

```SQL
drop database if exists projeto_node;
Create database projeto_node;
use projeto_node;
create table conteudo (
id INT auto_increment primary key,
categoria varchar (50),
conteudo varchar (200)
);
```
## Dependências  

```json

"dependencies": {
    "body-parser": "^1.19.0",
    "consign": "^0.1.6",
    "ejs": "^3.1.3",
    "express": "^4.17.1",
    "mysql": "^2.13.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }

```

##Estrutura de Pastas


```shell
D:.
├───config
├───models
├───public
│   ├───css
│   └───img
├───routes
└───views
    ├───pages
    └───partials

```

## Estrutura de Pastas/Arquivos

```shell


|   app.js
|   package-lock.json
|   package.json
|   README.md
|
+---config
|       --config.js
|       db.sql
|       db_conn.js
|
+---models
|       conteudoModel.js
|
+---public
|   +---css
|   |       styles.css
|   |
|   \---img
+---routes
|       back.js
|       cadastro.js
|       front.js
|       home.js
|
\---views
    +---pages
    |       back.ejs
    |       cadastro.ejs
    |       front.ejs
    |
    \---partials
            footer.ejs
            form.ejs
            head.ejs
            header.ejs

```