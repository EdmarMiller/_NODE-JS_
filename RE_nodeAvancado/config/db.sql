drop database if exists projeto_node;
Create database projeto_node;
use projeto_node;
create table conteudo (
id INT auto_increment primary key,
categoria varchar (50),
conteudo varchar (200)
);