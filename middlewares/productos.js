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
function buscar_indice_producto(req,res,next){
  console.log("paso por buscar_indice_producto")
  if(!("p_id" in req.body)){
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  if((req.body.p_id).length === 0 ){
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  for(let elementID in productos){
    if (req.body.p_id == productos[elementID].p_id){
      req.body.indice = elementID
      console.log("p_id: " + req.body.p_id + ", indice: " + req.body.indice)
      next()
      return    
    }
  }
  return res.status(500).json({"mensaje" : "No existe el p_id indicado"});
}
function validar_producto(req,res,next){
  //Todo_:
    //    - validar comas espacios y otros caracteres
  console.log("paso por validar_producto");
  // Verificacion que existan los campos: usuario, nombre_apellido, email, telefono, direccion, contraseña
  if(!("p_id" in req.body &&
       "nombre" in req.body &&
       "categoria" in req.body &&
       "detalle" in req.body &&
       "precio" in req.body &&
       "disponible" in req.body))
    {
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  if( // Verificacion de campos vacios
       (req.body.p_id).length === 0 ||
       (req.body.nombre).length === 0 ||
       (req.body.categoria).length === 0 ||
       (req.body.detalle).length === 0 ||
       (req.body.precio).length === 0 ||
       (req.body.disponible).length === 0)
    {
    return res.status(500).json({"mensaje" : "Debe completar todos los campos"});
  }
  // Verifico p_id valido
  if(!(/^([0-9])+$/).test(req.body.p_id)){
    return res.status(500).json({"mensaje" : "Ingrese un p_id valido"})
  }
  // Verifico titulo valido
  if(!(/^([a-zA-Z0-9\s])+$/).test(req.body.nombre)){ 
    return res.status(500).json({"mensaje" : "Ingrese un nombre valido"})
  }
  // Verifico categoria valido
  if(!(/^([a-zA-Z0-9])+$/).test(req.body.categoria)){ 
    return res.status(500).json({"mensaje" : "Ingrese un categoria valido"})
  }
  // Verifico detalle valido
  if(!(/^([a-zA-Z0-9\s_@.,/#&+-])+$/).test(req.body.detalle)){ 
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

module.exports = { validar_producto, validar_indice, buscar_indice_producto } 