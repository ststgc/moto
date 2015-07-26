'use strict';

// Require
var gulp = require('gulp');
var plz = require('gulp-pleeease');
var csso = require('gulp-csso');
var cache = require('gulp-cached');
var config = require('../config');


// Path
var pathDistCss = config.path.dist.css;
var pathDistCssGlob = pathDistCss + '/**/*.css'

// Options
var plzOptions = {
    'mqpacker': true,
    'browsers': ['last 2 versions', 'ie 8']
};



// Task
gulp.task('css:build', function(){
    return gulp.src(pathDistCssGlob)
        .pipe(cache())
        .pipe(csso())
        .pipe(plz(plzOptions))
        .pipe(gulp.dest(pathDistCss))
});
