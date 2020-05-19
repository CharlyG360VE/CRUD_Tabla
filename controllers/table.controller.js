
/*

  Controlador de datos y peticiones CRUD

*/

const tableModel = require('../models/table.model');
const dataTable = require('../models/dataTable.model');

tableCtrl = {};

//Peticion para obtener la tabla de la base de datos
 tableCtrl.getData = async (req, res) => {

  const table = await tableModel.find();

  //condicion que evalua si hay datos creados en la base de datos
  if(table.length !== 0) {
    res.json(table);
  } else {
    res.json({
      text: 'Base de datos vacia',
      info: 'Debe realizar peticion Post'
    })
  }

};

//peticion para obtener un elemento de la tabla
tableCtrl.getElementTable = async (req, res) => {

  //constante para obtener el elemento a mostrar recibido en un params que es enviado desde la url
  const { id } = req.params;

  const element = await tableModel.find();
  //obteniendo el valor del elemento
  const elementTable = element.find( element => element )[id];

  //respuesta con el elemento solicitado y su valor
  res.json({ 
    [id]: elementTable
  });

}

//peticion para crear la tabla en MongoDB
tableCtrl.createTable = async (req, res) => {

  const table = await tableModel.find();

  //condicion que evalua si ya fue insertada la tabla en la base de datos
  if(table.length === 0) {
    const table = new tableModel(dataTable);
    await table.save();

    res.json({
      text: "Datos insertados"
    })
  } else {
    res.json({
      text: 'Datos ya ingresados en la base de Datos'
    })
  }

};

//peticion para editar el valor de un elemento de la tabla
tableCtrl.editElementTable = async (req, res) => {

  const { id } = req.params;

  await tableModel.findOneAndUpdate( [id], { $set: {[id]: ''} } );

  res.json({
    text: 'Dato actualizado correctamente'
  });

}

module.exports = tableCtrl;