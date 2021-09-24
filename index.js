

const express = require('express');
const config = require('./config.js');

//Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Acamica API',
      version: '1.0.0'//,
    //  Autor: 'Moraldo Andres'
    }
  },
  apis: [
    './info.js',
    './index.js', 
    './routes/usuarios.js', 
    './routes/productos.js'],

};
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// inicializacion del server
const app = express();
app.use(express.json());

app.use('/api-docs',
   swaggerUI.serve,
   swaggerUI.setup(swaggerDocs)); 


//importacion de archivos
var usuarios = require('./routes/usuarios');
app.use('/usuarios', usuarios);
var productos = require('./routes/productos');
app.use('/productos', productos);


app.get('/', function (req, res) {
    res.send(`Resto dev v${config.version}`)
  })

console.log(`Titulo: ${config.title}`);
console.log(`Autor: ${config.autor}\n`);
app.listen(config.port, function(){
  console.log(`Escuchando por puerto ${config.port}`)
}) 

