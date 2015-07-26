'use strict';

// Require
var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');


// Task
gulp.task('build', function(callback){
    return runSequence(
        ['css:build', 'js:build', 'image:build'],
        'html:build',
        callback
    );
});

