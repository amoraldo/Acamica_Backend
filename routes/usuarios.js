
  const express = require('express')
  const router = express.Router()

  const usuarios = require('../models/usuarios')
  const validar_admin = require('../middlewares/usuarios')
  const validar_usuario = require('../middlewares/usuarios')
  
  router.get('/', validar_admin, function (req, res) {  
    res.json({usuarios})
    res.send('Usuarios datos')
  })
  
  router.post('/', validar_usuario, function (req, res) {
    console.log(req.body)
    usuarios.push(req.body)
    res.send('usuario Creado')
  })


  
  router.put('/', validar_admin, validar_usuario, function (req, res) {
    usuarios[req.body.indice].nombre = req.body.nombre;
    usuarios[req.body.indice].apellido = req.body.apellido;
    usuarios[req.body.indice].edad = req.body.edad;
    usuarios[req.body.indice].email = req.body.email;
    usuarios[req.body.indice].password = req.body.password;
    res.send('Usuario Actualizado')
  })
  router.delete('/', validar_admin, function (req, res) {
    //todo: validar indice parseint()
    usuarios.splice(req.body.indice,1);
    res.send('Usuario Eliminado')
  })
  
  module.exports = router;
