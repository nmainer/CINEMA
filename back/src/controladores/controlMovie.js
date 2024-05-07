

const {Pelis} = require ("../servicios/servicioMongoose");


   const Movie = async (request,response) =>{

        const valor2 = await Pelis();
        response.status(200).send(valor2);
   
    }
    module.exports = {Movie};