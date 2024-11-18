const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './scripts/index.js',
    formulario: './scripts/formularioMovie.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
};

  