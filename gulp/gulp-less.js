var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var app = require('../app-settings');

gulp.task('less', function () {
  return gulp.src(app.settings.getLESSPath() + 'main.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest(app.settings.getCSSPath()));
});
