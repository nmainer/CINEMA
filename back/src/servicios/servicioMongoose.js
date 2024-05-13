const {Peli}= require ("../modelos/Movie");

const Pelis = async ()=>{
    try{
        const valor =  await Peli.find();
        return valor;
    }catch(error){
        throw error;
    }
  
};

const crearPeli = async (movie)=>{

    try{
        const valor = await Peli.create(movie);
        return valor;
    } catch(error){
        throw error;
    };
};







module.exports = {Pelis,crearPeli};