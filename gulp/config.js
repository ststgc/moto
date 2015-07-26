'use strict';

var path;

path = {
    dev: {
        html: 'source/',
        css: 'source/assets/stylesheets',
        js: 'source/assets/javascripts',
        image: 'source/assets/images',
        data: 'source/data'
    },
    dist: {
        root: './build/',
        css: './build/assets/stylesheets',
        js: './build/assets/javascripts',
        image: './build/assets/images'
    }
};

module.exports = {
    path: path
};
