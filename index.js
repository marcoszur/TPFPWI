//Declaración de las dependencias
const express = require('express');
const path = require ('path');
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

//Configuración de las Rutas de mi aplicación 
app.use('/api/formulario', require('./routes/formulario'));

app.get('/', (req, res) => {
    res.render('formulario', { titulo: 'Formulario de Contacto' });
});

//Configuración del Puerto del servidor
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.on('error', (err) => {
    console.log(`Error en la ejecución del Servidor: ${error}`);
});