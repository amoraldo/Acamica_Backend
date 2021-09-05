



const express = require('express');
//const morgan = require('morgan');

//Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

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

// inicializacion del server
const app = express();
app.use(express.json());
//app.use(morgan('dev'));

app.use('/api-docs',
   swaggerUI.serve,
   swaggerUI.setup(swaggerDocs)); 


//importacion de archivos
var usuarios = require('./routes/usuarios');
app.use('/usuarios', usuarios);
var productos = require('./routes/productos');
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

