require('./gulp/gulp-clean');
require('./gulp/gulp-less');
require('./gulp/gulp-watch');
require('./gulp/gulp-browser-sync');
require('./gulp/gulp-jshint');
require('./gulp/gulp-copy');

var gulp = require('gulp');

gulp.task('build',['clean'], function(){
  gulp.start('less','lint','copy-vendors');
});
gulp.task('default',['build','serve']);

