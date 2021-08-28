const usuarios = require('../models/usuarios')


function validar_admin(req,res,next){
    if (usuarios[req.body.indice].admin==true){
      next()
    }
    else{
      return res.status(500).json({"mensaje" : "No permitido"})
    }

}
module.exports = validar_admin

function validar_usuario(req,res,next){

    //todo
        // exista cada uno de los parametros
    
    // Verificar que existan todas las Keys y no vacias
    if (!("nombre" in req.body)){
      return res.status(500).json({"mensaje" : "Key 'nombre' no encontrada"})
    }
    else{
      if ((req.body.nombre).length === 0){
        return res.status(500).json({"mensaje" : "Ingrese un nombre valido"})
      }
    }
    if ((req.body.apellido).length === 0){
        return res.status(500).json({"mensaje" : "Ingrese un apellido valido"})
    }
    if (req.body.email.length === 0){
        return res.status(500).json({"mensaje" : "Ingrese un email valido"})
    }
    if (req.body.password.length < 4){
        return res.status(500).json({"mensaje" : "Ingresa una contraseña correcta. Su longitud debe ser de al menos de 4 caracteres"})
    }
    if (req.body.edad.length === 0){
        return res.status(500).json({"mensaje" : "Ingrese una edad valida"})
    }

/*    
    if (email.indexOf("@")=== -1 || email.indexOf(".")=== -1){ alert("Ingrese un correo válido"); return -1;}
    if (pwd != rep_pwd){ alert("Las contraseñas no coinciden"); return -1;}
    if (users.length!==0){
      let index1=0;
      users.forEach(element => {
        if(email===element.email){
          alert("El usuario "  + email + "ya se encuentra registrado. Utilice el apartado LOGIN para entrar")
          console.log(index1)
        }
        index1=index1+1;
      });
*/
}
//module.exports = {validar_admin, validar_usuario}
module.exports = validar_admin  
module.exports = validar_usuario
  
/*
let users = []

// ToDo
// Leer usuarios cargados desde users.dat 


function newUser(){
  nombre = document.getElementById("Nombre").value;
  apellido = document.getElementById("Apellido").value;
  pais = document.getElementById("Pais").value;
  email = document.getElementById("Email").value;
  pwd = document.getElementById("Contrasena").value;
  rep_pwd = document.getElementById("Rep_Contrasena").value;
  // Validaciones de los campos
  if (nombre.length === 0){ alert("Ingresa tu nombre"); return -1;}
  if (apellido.length === 0){ alert("Ingresa tu apellido"); return -1;}
  if (email.length === 0){ alert("Ingresa tu email"); return -1;}
  if (email.indexOf("@")=== -1 || email.indexOf(".")=== -1){ alert("Ingrese un correo válido"); return -1;}
  if (pais.length === 0){ alert("Ingresa tu pais"); return -1;}
  if (pwd.length < 4){ alert("Ingresa una contraseña correcta. Su longitud debe ser de al menos de 4 caracteres"); return -1;}
  if (pwd != rep_pwd){ alert("Las contraseñas no coinciden"); return -1;}
  if (users.length!==0){
    let index1=0;
    users.forEach(element => {
      if(email===element.email){
        alert("El usuario "  + email + "ya se encuentra registrado. Utilice el apartado LOGIN para entrar")
        console.log(index1)
      }
      index1=index1+1;
    });
  }

  users.push(new Usuario(nombre, apellido, pais, email, pwd, "std"));
 

}

*/
