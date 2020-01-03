// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/state-store'),
      reports: ['html', 'cobertura', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    junitReporter: {
      outputDir: 'coverage', // results will be saved as $outputDir/$browserName.xml
      useBrowserName: false, // add browser name to report and classes names
      outputFile: 'test-report.xml' // if included, results will be saved as $outputDir/$browserName/$outputFile
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
      ? ['progress', 'coverage-istanbul', 'junit']
      : ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    browserNoActivityTimeout: 60000,
    restartOnFileChange: true
  });
};
