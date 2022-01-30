

const database = require('../db/config');



const formularioConsultas = (req, res) => {
    res.render('/public/formulario.html');
};

const crearRegistro = (req, res) => {

    const { nombre, email, telefono, asunto, comentario } = req.body;


    database('registros').insert({
        nombre,
        email,
        telefono,
        asunto,
        comentario

    }).catch(error => {
        console.log(error);
    });
}

module.exports = {
    formularioConsultas,
    crearRegistro


}
