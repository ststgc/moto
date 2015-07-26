'use strict';

// Require
var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var cache = require('gulp-cached');
var config = require('../config');

// Path
var pathRoot = config.path.dist.root;
var pathHtmlGlob = config.path.dist.root + '/**/*.html';

// Task
gulp.task('html:build', function(){

    gulp.src(pathHtmlGlob)
        .pipe(cache())
        .pipe(minifyHtml())
        .pipe(gulp.dest(pathRoot));
});
