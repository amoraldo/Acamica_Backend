
  const express = require('express')
  const router = express.Router()

  const productos = require('../models/productos')
  const validar_indice = require('../middlewares/productos')
 
  router.get('/', function (req, res) {  
      res.json({productos})
    })
  router.post('/', function (req, res) {
    console.log(req.body)
    productos.push(req.body)
    res.send('Producto Creado')
    })
  router.put('/', validar_indice, function (req, res) {
      productos[req.body.indice].nombre = req.body.nombre;
      productos[req.body.indice].precio = req.body.precio;
      
      res.send('Producto Actualizado')
    })
  router.delete('/', function (req, res) {
    productos.splice(req.body.indice,1);
    res.send('Producto Eliminado')
    })
  
    module.exports = router;