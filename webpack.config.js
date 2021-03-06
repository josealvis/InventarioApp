const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'Client/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'Client/dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
         }
  }
};