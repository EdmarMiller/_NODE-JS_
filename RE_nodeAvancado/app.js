const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var consign = require('consign');
const path = require('path')

const port = 3335;
const localhost = 'http://localhost:';

app.set('view engine', 'ejs')
app.set('views', './views');
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

consign()
.include('./routes')
.then('config/db_conn.js')
.then('models')
.into(app);

module.exports = app;

app.listen(port, function(){
	console.log(`___---Servido Ativo---___!!! ${localhost}${port}`)
})
