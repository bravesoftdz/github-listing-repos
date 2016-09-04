module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-route/angular-route.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/js/app.js',
      'src/js/constants/GlobalConstants.js',
      'src/js/factories/UserFactory.js',
      'src/js/controllers/MainController.js',
      'specs/*.js'
    ],
    exclude: [
    ],
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
