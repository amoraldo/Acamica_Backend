/**
 * @swagger
 * /:
 *  get:
 *    summary: Hello World
 *    description: Envia un mensaje de SOS
 *    responses:
 *       200:
 *         description: Resto v1.0.0
 * 
 * 
 * /usuarios/login/:
 *  post:
 *    summary: Acceso a la plataforma.
 *    description: Permite el acceso a la aplicacion
 *    consumes: 
 *      - application/json
 *    parameters:
 *     - in: body
 *       name: datos
 *       description: Usuario o email de acceso
 *       schema:  
 *         type: object
 *         required: 
 *           - usuario_email
 *           - password
 *         properties: 
 *            usuario_email:
 *              descritpion: nombre de usuario o email de acceso
 *              type: string
 *              example: admin@localhost
 *            password:
 *              description: Contraseña de acceso
 *              type: string
 *              example: password332
 *    responses:
 *      200:
 *       description: devuelve indice usuario (JSON)
 *      404:
 *       description: Los datos de usuario/email y contraseña no coinciden
 * 
 * /usuarios/:
 *  post:
 *    summary: Registro de un usuario.
 *    description:  Creacion de un nuevo usuario.
 *    consumes: 
 *      - application/json
 *    parameters:
 *     - in: body
 *       name: datos
 *       description: Datos de usuario para acceso a la plataforma
 *       schema:  
 *         type: object
 *         required: 
 *           - usuario
 *           - nombre_apellido
 *           - email
 *           - telefono
 *           - direccion
 *           - password
 *           - repass
 *         properties: 
 *            usuario:
 *              descritpion: identificacion de usuario
 *              type: string
 *              example: arturo23
 *            nombre_apellido:
 *              descritpion: nombre y apellido del usuario
 *              type: string
 *              example: Arturo Rosas
 *            email:
 *              descritpion: email de usuario
 *              type: string
 *              example: arturorosas@gmail.com
 *            telefono:
 *              descritpion: telefono de usuario
 *              type: number
 *              example: 2964619899
 *            direccion:
 *              descritpion: direccion de usuario
 *              type: string
 *              example: Pasaje San Luis 2322
 *            password:
 *              description: Contraseña de acceso
 *              type: string
 *              example: password332
 *            repass:
 *              descritpion: repite contraseña de usuario
 *              type: string
 *              example: password332
 *    responses:
 *      200:
 *       description: Usuario Creado
 *      500:
 *       description: Contraseña no coincide/n
 *                    Usuario ya registrado. Utilice Login para entrar a la plataforma
 * 
 *
 * /productos/:
 *  post:
 *    summary: Registro de un nuevos productos
 *    description: Creacion de un nuevos productos. Requiere permiso admin.
 *    parameters:
 *    - name: indice
 *      description: indice del usuario admin
 *      in: formData
 *      required: true
 *      type: int
 *    - name: titulo
 *      description: Titulo del producto
 *      in: formData
 *      required: true
 *      type: string
 *    - name: categoria
 *      description: Categoria a la que pertenece el producto para su agrupacion
 *      in: formData
 *      required: true
 *      type: string
 *    - name: detalle
 *      description: Detalle del producto. Descripcion de ingredientes
 *      in: formData
 *      required: true
 *      type: string
 *    - name: precio
 *      description: Precio del producto.
 *      in: formData
 *      required: true
 *      type: float
 *    - name: disponible
 *      description: Bandera que indica si el producto se encuentra disponible o no.
 *      in: formData
 *      required: true
 *      type: boolean
 *    responses:
 *       200:
 *         description: "Producto Creado"
 *  
 *        
 */
