var gulp = require('gulp');
var del = require('del');
var app = require('../app-settings');

gulp.task('clean', function () {
  return del([
    app.settings.getDistPath(),
    app.settings.getCSSPath(),
  ]);
});
