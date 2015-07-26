'use strict';

// Require
var gulp = require('gulp');
var ghpages = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var config = require('../config');


// Path
var pathRootGlob = config.path.dist.root + '/**/*';
// var notImage = '!/**/*.+(jpeg|jpg|png|gif|svg)';

// Task

gulp.task('ghpages', function() {
  return gulp.src(pathRootGlob)
    .pipe(ghpages());
});

gulp.task('staging', function(callback){
    return runSequence(
        ['css:build', 'html:build', 'js:build'],
        'ghpages',
        callback
    );
});
