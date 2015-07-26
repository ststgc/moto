'use strict';

// Require
var gulp = require('gulp');
var gh = require('gulp-gh-pages');
var config = require('../config');


// Path
var pathDistRoot = config.path.dist.root

gulp.task('ghpages', function(){
    gulp.src(pathDistRoot)
        .pipe(gh);
});
