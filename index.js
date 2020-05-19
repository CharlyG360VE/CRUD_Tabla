/*

  Servidor

*/

const express = require('express');
const morgan = require('morgan');

//settings
const app = express();
const { mongoose } = require('./database');

//midlewares
app.set('PORT', 3000);
app.use( morgan('dev') );
app.use( express.json() );

//routes
app.use( '/api/table', require('./routes/table.routes') )

// Server listen
app.listen( app.get('PORT'), () => console.log( `API listening on PATH: http://localhost:${ app.get('PORT') }/api/table` ) )