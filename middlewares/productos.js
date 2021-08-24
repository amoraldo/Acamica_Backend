const productos = require('../models/productos')


function validar_indice(req,res,next){
    console.log("paso por middleware")
    if(productos.length >= req.body.indice){
        console.log("Existe")
        next()
    }else{
        console.log("No existe")
        return res.status(500).json({"mensaje" : "invalido"})
    }
}

module.exports = validar_indice