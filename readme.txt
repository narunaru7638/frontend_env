■フロントエンド環境の構築の仕方

1.ディレクトリ直下で「npm install」を実施
2.「npm audit fix」を実施
3.「gulp」を実行する
4. resourceファイル配下のjs,scssファイルやpublic配下のhtmlを編集すると自動更新

■バージョン情報
gulp --version
 CLI version: 2.2.0
 Local version: 3.9.1

node --version
v11.15.0


node v12台と gulpのv3台は相性が悪いので注意

■各パッケージの説明
{
  "name": "sample",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jquery": "^3.2.1",
    "lodash": "^4.17.4",
    "package-lock.json": "^1.0.0",
    "vue": "^2.5.11"//vue.js
  },
  "devDependencies": {
    "babel": "^6.23.0",// ES6で書くためのもの
    "babel-core": "^6.26.0",// ES6で書くためのもの
    "babel-loader": "7.1.1",// ES6で書くためのもの
    "babel-preset-env": "^1.7.0",// ES6で書くためのもの
    "babel-preset-es2015": "^6.24.1",// ES6で書くためのもの
    "babelify": "^8.0.0",
    "browser-sync": "^2.18.13",
    "browserify": "^14.5.0",
    "classnames": "^2.2.5",
    "eslint": "^4.12.1",
    "gulp": "^3.9.1",//タスクランナー
    "gulp-changed": "^3.1.1",
    "gulp-eslint": "^4.0.0",
    "gulp-imagemin": "^4.0.0",
    "gulp-minify-css": "^1.2.4",
    "gulp-notify": "^3.0.0",// gulpタスクがエラーになった時に通知してくれる
    "gulp-plumber": "^1.1.0",// gulpタスクがエラーになっても止まらずに実行してくれる
    "gulp-sass": "^3.1.0",
    "gulp-webpack": "^1.5.0",// webpackをgulpで使う
    "vinyl-source-stream": "^1.1.0",
    "vue-devtools": "^3.1.9",
    "webpack": "^3.9.1",
    "webpack-stream": "^4.0.0"
  },
  "babel": {
    "presets": [
      "@babel/preset-env"
    ]
  }
}