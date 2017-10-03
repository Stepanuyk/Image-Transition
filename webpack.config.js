var webpack = require('webpack');
module.exports = {
    output: {
      filename: 'app.min.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: [
              ['latest', { modules: false }],
            ],
          },
        },
      ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        })
      ]
  };
  