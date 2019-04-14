const ImageminPlugin = require("imagemin-webpack");

// Before importing imagemin plugin make sure you add it in `package.json` (`dependencies`) and install
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  configureWebpack:{
   
    plugins: [
      // Make sure that the plugin is after any plugins that add images, example `CopyWebpackPlugin`
      new ImageminPlugin({
        bail: false, // Ignore errors on corrupted images
        cache: true,
        imageminOptions: {
          // Lossless optimization with custom option
          // Feel free to expirement with options for better result for you
          plugins: [
            imageminGifsicle({
              interlaced: true
            }),
            imageminJpegtran({
              progressive: true
            }),
            imageminOptipng({
              optimizationLevel: 5
            }),
            imageminSvgo({
              removeViewBox: true
            }),
            imageminMozjpeg({
              quality:60
            })
          ]
        }
      })
    ],  
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/alisonland/'
    : '/'
};