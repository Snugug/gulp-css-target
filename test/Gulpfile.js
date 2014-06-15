'use strict';

var gulp = require('gulp');
var toolkit = require('../index.js');

gulp.task('default', function () {
  return gulp.src('css/**/*.css')
    .pipe(toolkit.target({
      base: 'output'
    }))
    .pipe(gulp.dest('output/'));
});