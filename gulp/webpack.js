// const gulp = require('gulp');
// const webpack = require('webpack');
// const webpackStream = require('webpack-stream');
// const webpackConfig = require('../webpack.config.js');

// gulp.task('webpack', (done) => {
//     gulp.src('./app/js/app.js')
//         .pipe(webpackStream(webpackConfig), webpack)
//         .pipe(gulp.dest('./dist/js'));
//         done();
// });

// gulp.task('webpack2', (done) => {
//     gulp.src('./app/js/app.js')
//     .pipe(webpackStream(webpackConfig), webpack)
//     .pipe(gulp.dest('./dist/js'));

//     gulp.watch('app/js/*.js').on('change', function(){
//     gulp.src('./app/js/app.js')
//         .pipe(webpackStream(webpackConfig), webpack)
//         .pipe(gulp.dest('./app/js'));
//     }
// );
// done();
// });


import path from 'path'
import webpack from 'webpack'

let config = {
    entry: 'js/app.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    context: path.resolve(__dirname, '../dist')
}

function scripts() {

    return new Promise(resolve => webpack(config, (err, stats) => {

        if (err) console.log('Webpack', err)

        console.log(stats.toString({ /* stats options */ }))

        resolve()
    }))
}

module.exports = { config, scripts }