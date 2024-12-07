import path from 'path';
import nodeExternals from 'webpack-node-externals';
import WebpackObfuscator from 'webpack-obfuscator';
// const path = require('path');
// const nodeExternals = require('webpack-node-externals');
// const WebpackObfuscator = require('webpack-obfuscator');

export default {
  entry: './index.mjs',  // Your entry file
  target: 'node',           // Target Node.js environment
  externals: [nodeExternals()],  // Exclude node_modules from the bundle
  output: {
    path: path.resolve('dist'),
    filename: 'index.mjs',  // Output filename
    libraryTarget: 'module',  // Ensure output is an ES module
    // libraryTarget: 'commonjs2',
    clean: true
  },
  experiments: {
    outputModule: true, // Enable ES module output
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.mjs'],
  },
  mode: 'production',  // Use production mode for optimization
  // plugins: [
  //   new WebpackObfuscator({
  //     // Options for the obfuscator
  //     rotateStringArray: true,  // Rotate string arrays to obfuscate literal strings
  //     stringArray: true,  // Obfuscate string literals
  //     stringArrayEncoding: ['base64', 'rc4'], // Additional encoding options for string literals
  //     stringArrayThreshold: 0.75,  // Threshold for string obfuscation
  //     transformObjectKeys: true,  // Transform object keys
  //     renameGlobals: true,  // Rename global variables and function names
  //   }, [])
  // ]
};
