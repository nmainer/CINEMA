
const {Router} = require("express");
const controlMovie = require("../controladores/controlMovie");


const rutaMovie = Router();

rutaMovie.get("/", controlMovie.Movie)

module.exports = {rutaMovie}