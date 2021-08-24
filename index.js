const express = require('express')
const app = express()

app.use(express.json())

//function validar_usuario(req, res, next){
  //console.log("paso por aca")
  //next()
//}

//app.use(validar_usuario)

var usuarios = require('./routes/usuarios');
app.use('/usuarios', usuarios);
var productos = require('./routes/productos');
app.use('/productos', productos);

app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.listen(3000)

