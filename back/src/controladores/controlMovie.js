

const {functionValor} = require ("../servicios/servicioMovie");


   const Movie = async (request,response) =>{
        const valor2 = await functionValor;
        response.status(200).send(valor2);
    }
    module.exports = { Movie };