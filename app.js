// Requires: Librerías de terceros o personalizadas que ocupamos para que funcione algo
var express = require('express');
var mongoose = require('mongoose');


// Inicializar variables: Aquí iniciamos a usar las librerías
var app = express();
var port = 3000;

// Conexión a la Base de Datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;

    console.log('');
    console.log('>> \x1b[47m\x1b[30m%s', 'Data Base\x1b[0m');
    console.log('>> Port: ', 27017);
    console.log('>> Connection: \x1b[32m%s\x1b[0m', 'Successfully!');
    console.log('>> Status: \x1b[32m%s\x1b[0m', 'Online');
});

// Rutas
app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        message: 'Request successfully'
    });
});

// Escuchar peticiones
app.listen(port, () => {
    console.log('>> \x1b[47m\x1b[30m%s', 'Express Server\x1b[0m');
    console.log('>> Port: ', port);
    console.log('>> Connection: \x1b[32m%s\x1b[0m', 'Successfully!');
    console.log('>> Status: \x1b[32m%s\x1b[0m', 'Online');
});