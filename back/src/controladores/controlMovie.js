

const {Pelis,crearPeli} = require ("../servicios/servicioMongoose");


   const Movie = async (request,response) =>{

        const valor2 = await Pelis();
        response.status(200).send(valor2);
   
    }

    const newMovie = async(req,res)=>{
     const { title,year,director,duration,genre,rate,poster} = req.body;
     const nuevaPeli = await crearPeli({title,year,director,duration,genre,rate,poster});
     res.status(201).json("pelicula cargada correctamente");
    }



    module.exports = {Movie,newMovie};