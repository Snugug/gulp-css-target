'use strict';

var gulp = require('gulp');
var target = require('../index.js');

gulp.task('default', function () {
  return gulp.src('css/**/*.css')
    .pipe(target({
      base: 'output'
    }))
    .pipe(gulp.dest('output/'));
});