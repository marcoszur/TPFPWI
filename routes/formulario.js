/*  
    Responde a la Ruta /api/formulario
*/
const { Router } = require('express');
const router = Router();
const { 
    formularioConsultas,
    crearRegistro
} = require('../controllers/formulario');


router.get('/', formularioConsultas);
router.post('/', crearRegistro); // insertar registros


module.exports = router;


