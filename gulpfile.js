'use strict';

const gulp = require('gulp'),
      requireDir = require('require-dir'),
      browserSync = require('browser-sync').create();

process.setMaxListeners(0);

global.browserSync = browserSync;
global.paths = {
	'app': './app',
      'dist': './dist',
      'bower': './bower_components',
};

global.ghpagesOptions = {
      'force': true,
      'branch': 'gh-pages'
}

requireDir('./gulp', { recurse: false });
gulp.task('default', gulp.series('serve'));