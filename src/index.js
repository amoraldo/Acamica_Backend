const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

app.use(express.json());


const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Acamica API',
      version: '1.0.0'
    }
  },
  apis: ['./src/index.js', 
    './routes/usuarios.js', 
    './routes/productos.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs',
   swaggerUI.serve,
   swaggerUI.setup(swaggerDocs));

//function validar_usuario(req, res, next){
  //console.log("paso por aca")
  //next()
//}

//app.use(validar_usuario)

var usuarios = require('../routes/usuarios');
app.use('/usuarios', usuarios);
var productos = require('../routes/productos');
app.use('/productos', productos);

/**
 * @swagger
 * /:
 *  get:
 *    summary: Hello World
 *    description: Envia un mensaje de SOS
 *    responses:
 *       200:
 *         description: Hello World
 */
app.get('/', function (req, res) {
    res.send('Hello World')
  })

app.listen(3000)

