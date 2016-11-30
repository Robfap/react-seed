var isparta = require('isparta');
var browserifyIstanbul = require('browserify-istanbul');

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: [
      'browserify',
      'jasmine'
    ],

    reporters: [
      'spec',
      'html-all',
      'coverage'
    ],

    browsers: ['PhantomJS'],

    files: [
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      'app/scripts/**/*.*',
      'tests/**/*.js'
    ],

    exclude: [
      'app/scripts/main.js',
      'app/scripts/about.js',
      'app/scripts/**/components/**/*',
      'app/scripts/**/store/**/*',
      'app/scripts/**/containers/**/*',
      'app/scripts/**/mixins/**/*',
      'app/scripts/**/constants/**/*'
    ],

    preprocessors: {
      'tests/**/*.js': ['browserify'],
      'app/scripts/**/*.*': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [
        browserifyIstanbul({
          instrumenter: isparta,
          ignore: [
            'main.js',
            '**/components/**/*',
            '**/store/**/*',
            '**/containers/**/*',
            '**/mixins/**/*',
            '**/constants/**/*',
            'tests/!**!/!*',
            'vendor/!**/!*.*'
          ]
        }),
       'babelify'
      ],
      paths: ['app/scripts/', 'vendor/']
    },

    coverageReporter: {
      reporters: [
        {type: 'html', dir: 'reports/coverage/'},
        {type: 'text-summary'}
      ]
    },

    htmlAllReporter: {
      outputFile: 'reports/test/html-all.html',
      pageTitle: 'Unit test',
      subPageTitle: 'Unit test with karma-html-all-reporter'
    }
  });
};
