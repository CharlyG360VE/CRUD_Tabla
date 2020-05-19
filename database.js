/*

  Conexion a MongoDB Atlas

  Nota : para conectarse a su propia base de datos cambiar el PATH

*/

const mongoose = require('mongoose');

const PATH = 'mongodb+srv://charlyg360:2580@cluster0-gx44x.mongodb.net/tableDB?retryWrites=true&w=majority';

mongoose.connect( PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
} )
  .then( () => console.log('DB is connected') )
  .catch( err => console.log(err) );

module.exports = mongoose;