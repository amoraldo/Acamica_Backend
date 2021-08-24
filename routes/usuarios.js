
  const express = require('express')
  const router = express.Router()

  router.get('/', function (req, res) {  
      res.send('Usuario datos')
    })
  router.post('/', function (req, res) {
      res.send('Usuario Creado')
    })
  router.put('/', function (req, res) {
      res.send('Usuario Actualizado')
    })
  router.delete('/', function (req, res) {
      res.send('Usuario Eliminado')
    })
  
    module.exports = router;