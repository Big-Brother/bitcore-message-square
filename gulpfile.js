'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-square');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
