const usuarios = require('../models/usuarios')


function validar_admin(req,res,next){
  console.log("paso por validar_admin")
  if(!
    ("indice" in req.body) || 
    (req.body.indice.length === 0) || 
    (typeof(req.body.indice) !== "number") ||
    (req.body.indice > usuarios.length - 1))
    {
    return res.status(500).json({"mensaje" : "Parametros Incorrectos"});
  }
  else{
    req.admin = usuarios[req.body.indice].admin
    next()
  }
}

function validar_usuario(req,res,next){
  console.log("paso por validar_usuario")
  next()
}

function validar_login(req,res,next){
  console.log("paso por validar_login")
  req.indice = false
  if(!("usuario_email" in req.body && "password" in req.body)){
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  if(req.body.usuario_email.length === 0 || req.body.password.length === 0){
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  for(let element in usuarios){
    if ((req.body.usuario_email == usuarios[element].usuario || req.body.usuario_email == usuarios[element].email) &&
       (req.body.password == usuarios[element].password))
    {
      req.indice = element
      break
    }
  }
  if (req.indice != false){
    next()
  }else{
    return res.status(500).json({"mensaje" : "Los datos de usuario/email y contraseña no coinciden"})
  }
}

function validar_registro(req, res, next){
  console.log("paso por validar_registro")
  // Verificacion que existan los campos: usuario, nombre_apellido, email, telefono, direccion, contraseña
  if(!("usuario" in req.body &&
       "nombre_apellido" in req.body &&
       "email" in req.body &&
       "telefono" in req.body &&
       "direccion" in req.body &&
       "password" in req.body &&
       "repass" in req.body))
    {
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  if( // Verificacion de campos vacios
       (req.body.usuario).length === 0 ||
       (req.body.nombre_apellido).length === 0 ||
       (req.body.email).length === 0 ||
       (req.body.telefono).length === 0 ||
       (req.body.direccion).length === 0 ||
       (req.body.password).length === 0 ||
       (req.body.repass).length === 0)
    {
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  usuarios.forEach(element => { // Verifico que el usuario y email ya no se encuentren registrados
    if (req.body.usuario == element.usuario || req.body.email == element.email){
      return res.status(500).json({"mensaje" : "Usuario ya registrado. Utilice Login para entrar a la plataforma"})
    }
  })
  // Verifico email valido
  if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(req.body.email)){
    return res.status(500).json({"mensaje" : "Ingrese un email valido"})
  }
  // Verifico igualdad de password y repass
  if(!(req.body.password === req.body.repass)){
    return res.status(500).json({"mensaje" : "Contraseña no coincide"})
  }
  if (req.body.password.length < 4){ // Verifico longitud minima de password
    return res.status(500).json({"mensaje" : "La Contraseña debe contener al menos 4 caracteres"})
  }
  if(!(/^([ a-zA-Z])+$/).test(req.body.nombre_apellido)){ // Verifico Nombre y apellido validos
    return res.status(500).json({"mensaje" : "Ingrese un nombre y apellido valido"})
  }
  if(!(/^([a-zA-Z0-9])+$/).test(req.body.usuario)){ // Verifico usuario validos
    return res.status(500).json({"mensaje" : "Ingrese un usuario valido"})
  }
  if(!(/^([0-9])+$/).test(req.body.telefono)){ // Verifico telefono validos
    return res.status(500).json({"mensaje" : "Ingrese un telefono valido"})
  }
  next()
}
module.exports = { validar_admin, validar_usuario, validar_login, validar_registro }
