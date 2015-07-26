'use strict';

// Require
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cached');
var config = require('../config');

// Path
var pathDevImage = config.path.dev.image;
// var pathDistImage = config.path.dist.image;

// Task
gulp.task('image:build', function(){
    var pathDevImageGlob = pathDevImage + '/**/*';
    var imageminOptions = {
        optimizationLevel: 7,
        progressive: true,
        interlaced: true,
        use: [pngquant()]
    };
    gulp.src(pathDevImageGlob)
        // .pipe(cache())
        .pipe(imagemin(imageminOptions))
        .pipe(gulp.dest(pathDevImage));
});

