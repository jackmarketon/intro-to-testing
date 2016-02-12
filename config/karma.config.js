'use strict';

var path = require('path');

module.exports = function(config) {
  config.set({
    basePath:'./',
    // *********************************************
    // Frameworks:
    // We notibly mainly use Jasmine,
    // but (scsslint-loader/plugin) uses Mocha/Chai
    // I personally prever Jasmine due to more sane syntax
      // If testing jquery plugins:
      // * karma-jasmine-jquery
      // Aadd's `jasmine-jquery` framework, put before `jasmine`, and requires:
      // * jasmine-jquery `npm install jasmine-jquery`
      // sweet $().pluginNameToTest functionality
    // *********************************************
    frameworks: ['jasmine'],
    // *********************************************
    // Browsers:
    // search NPM for "Karma Browser Launcher"
    // Technically only one is needed, and more will cause tests to take longer
    // for the sake of testing everything noteable ones are:
    // * karma-chrome-launcher (does Chrome & Canary)
    // * karma-firefox-launcher
    // * karma-safari-launcher (I assume OSX only)
    // * karma-ie-launcher (I assume Win only)
    // * karma-phantomjs-launcher
    // * karma-browserstack-launcher (I need to play around with this, lets you set browser/OS as well)
    // You can also do custom launchers, based on above ones!
    // You also can manually capture Karma via `http://<hostname:IP>:<port>/`
    // of the machine where karma is running, allows you to do tests on any device/platform.
    // *********************************************
    browsers: ['Chrome', 'PhantomJS', 'Chrome_without_sec', 'PhantomJS_custom'],
    customLaunchers: {
      // Due to chrome not liking loading additional files via `file://`
      Chrome_without_sec: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      },
      // Example of a more verbose custom using PhantomJS
      PhantomJS_custom: {
        base: 'PhantomJS',
        options: {
          windowName: 'Test Custom Phantom',
          settings: {
            webSecurityEnabled: false
          }
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },
    // *********************************************
    // Reporters:
    // search NPM for Karma Reporter, technically like frameworks
    // you only need one, but multiple can be useful
    // if they are not all CLI ones, there is
    // also specific code coverage reporters
    // I prefer:
    // * karma-nested-reporter
    // * karma-growly-reporter (if you use Growl, requires setup in Growl)
    // * karma-jasmine-html-reporter-livereload (works best with one browser)
    // * karma-htmlfile-reporter (works best with multiple browsers)
    //
    // Fun reporters include:
    // * karma-nyan-reporter
    // *********************************************
    reporters: ['html', 'nyan'],
    colors: true, // Pretty output to CLI, default is true but why not make sure?
    // Config for plugins/launchers/reporters
    phantomjsLauncher: {
      // Have phantomjs exit on ResourceError
      // (karma exits without killing phantomjs proc)
      exitOnResourceError: true
    },
    // Config for nested reporter
    nestedReporter: {
      color: {
        should: 'red',
        browser: 'yellow'
      },
      icon: {
        failure: '☠  ',
        indent: 'ட ',
        browser: '☢'
      }
    },
    // Config for htmlfile reporter
    htmlReporter: {
      outputFile: 'config/tests/report.html',
      // Optional
      pageTitle: 'Test Report',
      subPageTitle: 'Intro to testing report.'
    },
    // Need to include all files karma needs to have knowledge of,
    // angular/jquery/underscore/testing files/etc
    files: [
      './../js/**/*.js',
    ]
  });
};