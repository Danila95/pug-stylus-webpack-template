const webpack = require('webpack');
const path = require("path");
const argv = require('yargs').argv;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PROD_MODE = argv.mode === 'production';
const DEV_MODE = argv.mode === 'development';
console.log('DEV_MODE=' + DEV_MODE);
console.log('PROD_MODE=' + PROD_MODE);

const PATHS = {
  dev: path.join(__dirname, 'dev/'),
  prod: path.join(__dirname, 'prod/')
};

let conf = {
  entry: {
    main: PATHS.dev + "main.js",
  },
  output: {
    path: path.resolve(__dirname, PATHS.prod),
    filename: "js/[name].bundle.js"
  },
  devServer: {
  	overlay: true,
    contentBase: path.join(__dirname, 'prod'),
    compress: true,
    host: 'localhost',
    port: 8080,
    open: true
  },
    module: {
    rules: [
      {
        test: /\.js$|\.es6$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "env",
              "stage-3"
            ]
          }
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: PROD_MODE ? false : true
        }
      },
      {
        test: /\.styl(us)?$/,
        include: path.resolve(__dirname, 'dev'),
        use: ExtractTextPlugin.extract({
          use: [
            // {
            //   loader: "style-loader" // creates style nodes from JS strings
            // },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "stylus-loader" // compiles Stylus to CSS
            }
          ]
        })
      },
      //работа с изображениеми
       {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.ico$|\.mp3$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: (file) => {
                let path = file.split("dev/")[1]; //this will yield assets
                let newPath = '../' + path;
                return newPath
              }
            },  
          },
          'img-loader',
        ]
      },
      //работа со шрифтами
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: (file) => {
                let path = file.split("dev/")[1];  
                return path
              }
            }  
          },
          'img-loader',
        ]
      },
    ]
  },
  plugins: [
  PROD_MODE ? new CleanWebpackPlugin(['prod'])
  : () => {},
  new ExtractTextPlugin({
      filename: 'css/style.css',
      allChunks: true,
    }),
  new HtmlWebpackPlugin({
    hash: true,
    template: PATHS.dev + 'index.pug',
    // inject: false, // отключает автоматическую ставку ссылок на js и css файлы в HTML 
    }),
    // new HtmlWebpackPlugin({ // необходимо создать экземпляр 1 стр. html = 1 экземпляр
        //  filename: 'test.html',
        //  template: PATHS.dev + 'pug/test.pug',
        // }),
  new CopyWebpackPlugin([{
        from: './dev/fonts',
        to: './fonts'
      },
      {
        from: './dev/img',
        to: './img'
      }
    ]),
  PROD_MODE ? new ImageminPlugin({
    test: /\.(png|jpe?g|gif|ico|svg)$/i
  })
  : () => {},
  ]
};

module.exports = (env, options) => {
  let mode = options.mode ==='production';
  conf.devtool = mode ?  false //'source-map' 
            : 'eval-sourcemap';
  return conf;
};