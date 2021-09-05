
  const express = require('express')
  const router = express.Router()

  const productos = require('../models/productos')
  const validar_indice = require('../middlewares/productos')
 
/**
 * @swagger
 * /estudiantes:
 *  post:
 *    description: Crea un nuevo estudiante
 *    parameters:
 *    - name: nombre
 *      description: Nombre del estudiante
 *      in: formData
 *      required: true
 *      type: string
 *    - name: edad
 *      description: Edad del estudiante
 *      in: formData
 *      required: true
 *      type: integer
 *    responses:
 *      200:
 *        description: Success
 * 
 */
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
  router.delete('/', validar_indice, function (req, res) {
    productos.splice(req.body.indice,1);
    res.send('Producto Eliminado') 
    })
  
    module.exports = router; 