var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var app = require('../app-settings');

gulp.task('watch', function () {
  watch(app.settings.getLESSPath() + '*.less', batch(function (events, done) {
    gulp.start('default', done);
  }));
});
