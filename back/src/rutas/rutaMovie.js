
const {Router} = require("express");

const {Movie, newMovie} = require("../controladores/controlMovie");
const { validacionMovie } = require("../Middlewears/validacionMovie");

const rutaMovie = Router();

rutaMovie.get("/",Movie);
rutaMovie.post("/",validacionMovie,newMovie);

module.exports = {rutaMovie}