const {Peli}= require ("../modelos/Movie");

const Pelis = async ()=>{
    try{
        const valor =  await Peli.find();
        return valor;
    }catch(error){
        throw error;
    }
  
} ;






module.exports = {Pelis};