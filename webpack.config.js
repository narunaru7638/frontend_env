const path = require('path');

module.exports = {
  entry: [
      //ここにまとめたいjsファイルを記載
      path.join(__dirname, 'resources/js/app.js'),
      path.join(__dirname, 'resources/js/src.js'),
  ],
  output: {
    //コンパイルしたjsファイルの作成先
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['env']
        }
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js'],
    alias: {
      vue: 'vue/dist/vue.esm.js' // npm install したvueはtemplete機能のないランタイム限定ビルドなので、こっちを使うようエイリアスをはる
    }
  }
};