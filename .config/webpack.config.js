const path = require('path');
const assetsPath = path.resolve(__dirname, '../dist/assets/js');
const TerserPlugin = require('terser-webpack-plugin');

// Set production or development via NODE_ENV
const MODE = process.env.NODE_ENV;

const webpackConfig = {
  mode: MODE,
  // Entry point
  entry: {
    main: './src/assets/ts/main.ts',
  },
  // Output files
  output: {
    path: assetsPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  target: ['web', 'es5'],
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  }
};

module.exports = webpackConfig;
