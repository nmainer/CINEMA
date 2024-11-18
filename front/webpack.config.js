const path = require('path');

module.exports = {
  mode: 'production',  // Usa 'production' para la versión final
  entry: {
    index: './scripts/index.js',  // Archivo de entrada para index.js
    formulario: './scripts/formularioMovie.js',  // Archivo de entrada para formulario.js
  },
  output: {
    path: path.resolve(__dirname, 'public'),  // Los archivos generados se guardarán en 'public'
    filename: '[name].bundle.js',  // Generará index.bundle.js, formulario.bundle.js, etc.
  },
};


  