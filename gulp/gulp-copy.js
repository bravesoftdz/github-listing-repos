var gulp = require('gulp');
var app = require('../app-settings');

gulp.task('copy-vendors', function () {
  gulp.src([
      app.settings.getVendorPath() + 'angular/angular.min.js',
      app.settings.getVendorPath() + 'angular-route/angular-route.min.js'
    ])
    .pipe(gulp.dest(app.settings.getJSPath() + 'vendors'));
});

