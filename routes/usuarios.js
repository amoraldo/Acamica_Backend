
  const express = require('express')
  const router = express.Router()

  const usuarios = require('../models/usuarios');
 // const { validar_admin, validar_usuario, validar_registro } = require("../middlewares/usuarios");
  const validar_admin = require('../middlewares/usuarios')
  const validar_usuario = require('../middlewares/usuarios')
  //const validar_registro = require('../middlewares/usuarios')
  

  router.get('/',validar_admin,  function (req, res) {  // datos de usuario, solo como admin
    if(req.admin){
      res.status(200).json({usuarios})
    }
    res.send('Usuarios datos')
  })
  /*
  router.post('/', validar_registro, function (req, res) {  // crear un usuario
    console.log("paso por post user crear usuario")
    usuarios.push(req.body)
    usuarios[(usuarios.length)-1].admin = false;
    res.send('usuario Creado')
  })

  router.put('/', validar_admin, validar_usuario, function (req, res) { //actualizar usuario
    usuarios[req.body.indice].nombre_apellido = req.body.nombre;
    usuarios[req.body.indice].email = req.body.email;
    usuarios[req.body.indice].password = req.body.password;
    res.send('Usuario Actualizado')
  })
*/
  router.delete('/', validar_admin, function (req, res) {  // eliminar un usuario
    //todo: validar indice parseint() 
    usuarios.splice(req.body.indice,1);
    res.send('Usuario Eliminado')  
  })
  
  module.exports = router;
