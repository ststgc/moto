'use strict';

// Require
var gulp = require('gulp');
var cache = require('gulp-cached');
var uglify = require('gulp-uglify');
var config = require('../config');



// Path
var pathDistJs = config.path.dist.js;

// Task
gulp.task('js:build', function(){
    return gulp.src(pathDistJs)
        .pipe(cache())
        .pipe(uglify())
        .pipe(gulp.dest(pathDistJs))
});
