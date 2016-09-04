var gulp = require('gulp');
var uglify = require('gulp-uglify');
var path = require('path');
var app = require('../app-settings');
var pump = require('pump');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('uglify', function (cb) {
  pump([
        gulp.src([
          app.settings.getJSPath() + 'app.js',
          app.settings.getJSPath() + 'configs/RestangularConfig.js',
          app.settings.getJSPath() + 'constants/GlobalConstants.js',
          app.settings.getJSPath() + 'controllers/MainController.js',
        ]),
        uglify({
          mangle: false
        }),
        concat('app.min.js'),
        gulp.dest(app.settings.getSrcPath())
    ],
    cb
  );
});
