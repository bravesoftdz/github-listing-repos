var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var app = require('../app-settings');

gulp.task('serve', ['less'], function() {
    browserSync.init({
        server: app.settings.getSrcPath()
    });
    gulp.watch(app.settings.getLESSPath() + "*.less", ['less']);
    gulp.watch(app.settings.getSrcPath() + "*.html").on('change', browserSync.reload);
});

gulp.task('serve-dist', function() {
    browserSync.init({
        server: app.settings.getDistPath()
    });
});
