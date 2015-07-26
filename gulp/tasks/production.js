
// Require
var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var fs = require('fs');
var config = require('../config');


// Path

// Tasks
gulp.task('production', function(){
    var pathRootGlob = config.path.dist.root + '/**/*';
    var pathCredential = '../../credentials/moto.shotasetoguchi.jp.json';
    var key = JSON.parse(fs.readFileSync(pathCredential));
    var publisher = awspublish.create(key);
    var headers = {
        'Cache-Control': 'max-age=300, no-transform, public'
    };

    gulp.src(pathRootGlob)
        .pipe(publisher.publish(headers))
        .pipe(publisher.cache())
        .pipe(awspublish.reporter());
});

