/*

  Rutas del servidor que son controladas en un JS en la carpeta 'controllers

*/

const express = require('express');
const router = express.Router();
const tableCtrl = require('../controllers/table.controller')

router.get( '/', tableCtrl.getData ); //ruta para obtener la tabla
router.get( '/:id', tableCtrl.getElementTable ); //ruta para obtener un elemento de la tabla
router.post( '/', tableCtrl.createTable ); //ruta para insertar la tabla en una base de datos
router.put( '/:id', tableCtrl.editElementTable ) //ruta para actualizar el valor de un elemento de la tabla

module.exports = router;