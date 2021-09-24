const productos = require('../models/productos');

function validar_indice(req,res,next){
    console.log("paso por middleware")
    if(productos.length >= parseInt(req.body.indice)){
        console.log("Existe")
        next()
    }else{
        console.log("No existe")
        return res.status(500).json({"mensaje" : "invalido"})
    }
}

function validar_producto(req,res,next){
  //Todo_:
    //    - validar comas espacios y otros caracteres
  console.log("paso por validar_producto");
  // Verificacion que existan los campos: usuario, nombre_apellido, email, telefono, direccion, contraseña
  if(!("indice" in req.body &&
       "id" in req.body &&
       "nombre" in req.body &&
       "categoria" in req.body &&
       "detalle" in req.body &&
       "precio" in req.body &&
       "disponible" in req.body))
    {
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  if( // Verificacion de campos vacios
       (req.body.indice).length === 0 ||
       (req.body.id).length === 0 ||
       (req.body.nombre).length === 0 ||
       (req.body.categoria).length === 0 ||
       (req.body.detalle).length === 0 ||
       (req.body.precio).length === 0 ||
       (req.body.disponible).length === 0)
    {
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  // Verifico indice valido
  if(!(/^([0-9])+$/).test(req.body.indice)){ 
    return res.status(500).json({"mensaje" : "Ingrese un indice valido"})
  }
  // Verifico id valido
  if(!(/^([0-9])+$/).test(req.body.id)){
    return res.status(500).json({"mensaje" : "Ingrese un id valido"})
  }
  // Verifico nombre valido
  if(!(/^([a-zA-Z0-9])+$/).test(req.body.nombre)){ 
    return res.status(500).json({"mensaje" : "Ingrese un nombre valido"})
  }
  // Verifico categoria valido
  if(!(/^([a-zA-Z0-9])+$/).test(req.body.categoria)){ 
    return res.status(500).json({"mensaje" : "Ingrese un categoria valido"})
  }
  // Verifico detalle valido
  if(!(/^([a-zA-Z0-9])+$/).test(req.body.detalle)){ 
//  if(!(/\s/).test(req.body.detalle)){ 
        return res.status(500).json({"mensaje" : "Ingrese un detalle valido"})
  }
  // Verifico precio valido
  if(!(/^([0-9])+$/).test(req.body.precio)){ 
    return res.status(500).json({"mensaje" : "Ingrese un precio valido"})
  }
  // Verifico disponible valido
  if(typeof(req.body.disponible)!=="boolean"){ 
    return res.status(500).json({"mensaje" : "Ingrese un disponible valido"})
  }
  next()
}

module.exports = { validar_producto, validar_indice } 