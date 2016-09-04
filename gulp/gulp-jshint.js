var jshint = require('gulp-jshint');
var gulp = require('gulp');
var app = require('../app-settings');
 
gulp.task('lint', function() {
  return gulp.src(
      app.settings.getJSPath() + '*.js'
    )
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
