module.exports = {
    mode: 'development',
    entry: {
      index: './scripts/index.js', 
      formulario: './scripts/formularioMovie.js'
    },
    output: {
      path: __dirname + '/public', // Salida en la carpeta public
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'] // Si tienes CSS, asegúrate de que Webpack los procese
        }
      ]
    }
  };
  