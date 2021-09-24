
  const express = require('express')
  const router = express.Router()

  const productos = require('../models/productos');
  const { validar_admin } = require("../middlewares/usuarios");
  const { validar_producto, validar_indice } = require("../middlewares/productos");
 
  router.get('/', validar_admin, function (req, res) {  // datos de productos, solo como admin
    console.log("get /productos")
    res.status(200).json({productos})
  })
  

  router.post('/', validar_admin, validar_producto, function (req, res) {  // crear un producto
    console.log("post /producto")
//    productos.push(req.body)
    productos.push({"id" : req.body.id, 
                    "nombre" : req.body.nombre, 
                    "categoria" : req.body.categoria,
                    "detalle" : req.body.detalle,
                    "precio" : req.body.precio,
                    "disponible" : req.body.disponible})
    res.send('Producto Creado')
  })

  router.put('/', validar_admin, function (req, res) { //actualizar producto
    // ToDo: 
    //    verificaciones de cada uno de los campos:
    //        - nombre, solo letras
    //        - id, solo numeros
    //        - categoria, solo letras
    //        - detalle, letras, numeros y simbolos
    //        - precio solo numeros y entero
    //        - disponible, boleano

        
      console.log("put /productos")
      if("id" in req.body && req.body.id.length != 0){
        productos[req.body.indice].id = req.body.id;
      }
      if("nombre" in req.body && req.body.nombre.length != 0){
        productos[req.body.indice].nombre = req.body.nombre;
      }
      if("categoria" in req.body && req.body.categoria.length != 0){
        productos[req.body.indice].categoria = req.body.categoria;
      }
      if("detalle" in req.body && req.body.detalle.length != 0){
        productos[req.body.indice].detalle = req.body.detalle;
      }
      if("precio" in req.body && req.body.precio.length != 0){
        productos[req.body.indice].precio = req.body.precio;
      }
      if("disponible" in req.body && req.body.disponible.length != 0){
        productos[req.body.indice].disponible = req.body.disponible;
      }
      res.send('Producto Actualizado')
    })
  
    router.delete('/', validar_admin, function (req, res) {  // eliminar un usuario
      console.log("delete /productos")
      productos.splice(req.body.indice,1);
      res.send('Producto Eliminado')
    })
    

    module.exports = router;
