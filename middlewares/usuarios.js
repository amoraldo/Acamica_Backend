const usuarios = require('../models/usuarios')


function validar_admin(req,res,next){
  console.log("paso por validar_admin")
  if(!
    ("id" in req.body) || 
    (req.body.id.length === 0))
    {
    return res.status(500).json({"mensaje" : "Parametros Incorrectos"});
  }
  else{
    for(let elementID in usuarios){
      if (req.body.id == usuarios[elementID].id && usuarios[elementID].admin==true){
        next()
        return    
      }    
    }
  }
  return res.status(500).json({"mensaje" : "El ID no permite esta accion"});
}

function buscar_indice_usuario(req,res,next){
  console.log("paso por buscar_indice_usuario")
  if(!("u_id" in req.body)){
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  if((req.body.u_id).length === 0 ){
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  for(let elementID in usuarios){
    if (req.body.u_id == usuarios[elementID].id){
      req.body.indice = elementID
      console.log("u_id: " + req.body.u_id + ", indice: " + req.body.indice)
      next()
      return    
    }
  }
  return res.status(500).json({"mensaje" : "No existe el u_id indicado"});
}

function validar_usuario(req,res,next){
  console.log("paso por validar_usuario")
  console.log("sin implementar")
  next()
}

function validar_login(req,res,next){
  console.log("paso por validar_login")
  req.body.id = false
  if(!("usuario_email" in req.body && "password" in req.body)){
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  else{
    if(req.body.usuario_email.length === 0 || req.body.password.length === 0){
      return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
    }
    else{
      for(let element in usuarios){
        if ((req.body.usuario_email == usuarios[element].usuario || req.body.usuario_email == usuarios[element].email) &&
           (req.body.password == usuarios[element].password)){
             req.body.id = usuarios[element].id     
             next()
             return
        }    
      }   
    }
  }
  return res.status(500).json({"mensaje" : "Login incorrecto"});
}

function validar_registro(req, res, next){
  console.log("paso por validar_registro")
  // Verificacion que existan los campos: usuario, nombre_apellido, email, telefono, direccion, contraseña
  if(!("id" in req.body &&
       "usuario" in req.body &&
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
       (req.body.id).length === 0 ||
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
  // Verifico que el usuario y email ya no se encuentren registrados
  // Verifico que el id sea unico

  for(let element in usuarios){
    console.log(usuarios[element].id)
    if (req.body.usuario == usuarios[element].usuario || req.body.email == usuarios[element].email){
      return res.status(500).json({"mensaje" : "Usuario ya registrado. Utilice Login para entrar a la plataforma"})
    }
    if (req.body.id == usuarios[element].id){
      return res.status(500).json({"mensaje" : "Id de usuario ya registrado."})
    }
  }

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
  if(!(/^([0-9])+$/).test(req.body.id)){ // Verifico id validos
    return res.status(500).json({"mensaje" : "Ingrese un ID valido"})
  }

  next()
}
module.exports = { validar_admin, validar_usuario, validar_login, validar_registro, buscar_indice_usuario }
