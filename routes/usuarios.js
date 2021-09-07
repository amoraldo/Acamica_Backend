const express = require('express')
const router = express.Router()

const usuarios = require('../models/usuarios');
const { validar_admin, validar_usuario, validar_login, validar_registro } = require("../middlewares/usuarios");
  

  router.get('/',validar_admin,  function (req, res) {  // datos de usuario, solo como admin
    console.log("get /usuarios/")
    if(req.admin){
      res.status(200).json({usuarios})
    }
    else{
      res.send('Restringido')
    }
  })

  router.post('/login/', validar_login, function(req,res){ // login
    console.log("post /usuarios/login")
    if(req.indice != false){
      res.status(200).json({"indice" : req.indice})
    }
  })
  
  router.post('/', validar_registro, function (req, res) {  // crear un usuario
    console.log("post /usuarios/")
    usuarios.push(req.body)
    usuarios[(usuarios.length)-1].admin = false;
    res.send('usuario Creado')
  })

  router.put('/', validar_admin, validar_usuario, function (req, res) { //actualizar usuario
    console.log("put /usuarios/")
    usuarios[req.body.indice].nombre_apellido = req.body.nombre;
    usuarios[req.body.indice].email = req.body.email;
    usuarios[req.body.indice].password = req.body.password;
    res.send('Usuario Actualizado')
  })

  router.delete('/', validar_admin, function (req, res) {  // eliminar un usuario
    console.log("delete /usuarios/")
    usuarios.splice(req.body.indice,1);
    res.send('Usuario Eliminado')  
  })
  
  module.exports = router;
