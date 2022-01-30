const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Salta455",
    post: "3306",
    database: "formulario"

});

connection.connect(function(err){
    if (err) throw err;
    console.log("Conectado a la base de datos exitosamente");

});



/*const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'Salta455',
        database: 'formulario'
    },

    pool: { min: 0, max: 8}
})

connection.connect(function(err){
    if (err) throw err;
    console.log("Conectado a la base de datos exitosamente");

});

knex.schema.hasTable('registros').then(function(exists) {
    if (!exists) {
        return knex.schema.createTable('registros', function(t) {
            t.increments('idCliente').primary();
            t.string('nombre', 100);
            t.string('apellido', 100);
            t.string('email', 100);
            t.string('telefono', 50);
            t.string('asunto', 100);
            t.text('comentario', 300);
        });
    }
});
*/

