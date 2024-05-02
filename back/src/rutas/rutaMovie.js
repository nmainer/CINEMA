
const {Router} = require("express");

const {Movie} = require("../controladores/controlMovie");

const rutaMovie = Router();

rutaMovie.get("/",Movie);

module.exports = {rutaMovie}