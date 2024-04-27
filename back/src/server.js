const {rutaPrincipal} = require("./rutas/rutaPrincipal");
const express = require("express");


const app = express();
app.use(rutaPrincipal);


module.exports = {app};