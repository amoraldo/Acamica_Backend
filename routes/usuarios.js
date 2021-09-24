const express = require('express')
const router = express.Router()

const usuarios = require('../models/usuarios');
const { validar_admin, validar_usuario, validar_login, validar_registro } = require("../middlewares/usuarios");
  

  router.get('/', validar_admin,  function (req, res) {  // datos de usuario, solo como admin
    console.log("get /usuarios/")
      res.status(200).json({usuarios})
  })

  
  router.post('/login/', validar_login, function(req,res){ // login
    console.log("post /usuarios/login")
    if(req.body.id != false){
      res.status(200).json({"id" : req.body.id})
    }
  })
   // crear un usuario
  router.post('/', validar_registro, function (req, res) { 
    console.log("post /usuarios")
    usuarios.push(req.body)
    usuarios[(usuarios.length)-1].admin = false;
    res.send('usuario Creado')
  })

  router.put('/', validar_admin, function (req, res) { //actualizar usuario
  // Aun no implementada
    console.log("put /usuarios")
    if("nombre_apellido" in req.body && req.body.nombre_apellido.length != 0){
      usuarios[req.body.indice].nombre_apellido = req.body.nombre_apellido;
    }
    if("usuario" in req.body && req.body.usuario.length != 0){
      usuarios[req.body.indice].usuario = req.body.usuario;
    }
    if("direccion" in req.body && req.body.direccion.length != 0){
      usuarios[req.body.indice].direccion = req.body.direccion;
    }
    if("email" in req.body && req.body.email.length != 0){
      usuarios[req.body.indice].email = req.body.email;
    }
    if("password" in req.body && req.body.password.length != 0){
      usuarios[req.body.indice].password = req.body.password;
    }
    if("telefono" in req.body && req.body.telefono.length != 0){
      usuarios[req.body.indice].telefono = req.body.telefono;
    }
    res.send('Usuario Actualizado')
  })

  router.delete('/', validar_admin, function (req, res) {  // eliminar un usuario
    console.log("delete /usuarios")
    usuarios.splice(req.body.indice,1);
    res.send('Usuario Eliminado')
  })
  
  module.exports = router ;
