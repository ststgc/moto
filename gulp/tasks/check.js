'use strict';

// Require
var gulp = require('gulp');
var config = require('../config');


// Path
var pathRoot = config.path.dist.root

// Task
gulp.task('browser-sync', function(){
    browserSync({
        port: PORT,
        browser: "google chrome canary",
        open: false,
        server: {
            baseDir: pathRoot,
        },
    });
});

gulp.task('check', function(callback){
    return runSequence(
        ['css:build', 'js:build'],
        'html:build',
        'browser-sync',
        callback
    );
});
