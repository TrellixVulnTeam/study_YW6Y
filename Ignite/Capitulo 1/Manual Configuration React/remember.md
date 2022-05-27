# how to start react

npm init -y

npm add react

npm add react-dom

# how to start babel

npm add @babel/core @babel/cli @babel/preset-env -D

create babel.config.js

module.exports = {
presets: [
'@babel/preset-env',
[
'@babel/preset-react',
{
runtime: 'automatic'
}
]
]
}

# usar o babel

arquivo aser convertido/-o or --out-file/ nome do arquivo apos conversão
npx babel src/index.jsx -o dist/bundle.js

# instalar babel-loader

npm add babel-loader -D

# install webpack

npm add webpack webpack-cli webpack-dev-server -D

create file
webpack.config.js

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'
// entry: 'src/index/jsx'
module.exports = {
mode: isDevelopment ? 'development' : 'production',
devtool: isDevelopment ? 'eval-source-map' : 'source-map',
entry: path.resolve(**dirname, 'src', 'index.jsx'),
output: {
path: path.resolve(**dirname, 'dist'),
filename: 'bundle.js'
},
resolve: {
extensions: ['.js', '.jsx']
},
devServer: {
static: path.resolve(**dirname, 'public')
},
plugins: [
new HtmlWebpackPlugin({
template: path.resolve(**dirname, 'public', 'index.html')
})
],
module: {
rules: [
{
test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
exclude: /node_modules/,
use: ['style-loader', 'css-loader', 'sass-loader']
}
]
}
}

# instalar webpack html plugin

npm add html-webpack-plugin -D

# instalar cross-env

npm add cross-env -D

edit package.json

"scripts":{
"dev": "webpack serve"
"build": "cross-env NODE_ENV=production webpack"
}

# style-loader css-loader

npm add style-loader css-loader -D

# sass-loader

npm add sass -D
npm add sass-loader
