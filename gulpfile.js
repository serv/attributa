var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    exit = require('gulp-exit'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish');

gulp.task('test-once', function() {
  return gulp.src('test/*.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}))
  .pipe(exit());
});

gulp.task('lint', function() {
  return gulp.src(['./lib/index.js', './test/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});
