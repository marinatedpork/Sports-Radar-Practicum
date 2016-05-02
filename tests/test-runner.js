var testrunner = require('qunit');

testrunner.run({
  code: {
    path: 'lib/football-statistic-analysis.js',
    namespace: 'FootballStatisticAnalysis'
  },
  tests: "tests/football-statistic-analysis-test.js"
});

testrunner.run({
  code: {
    path: 'lib/rushers.js',
    namespace: 'Rushers'
  },
  tests: "tests/rushers-test.js"
});

testrunner.run({
  code: {
    path: 'lib/rushes.js',
    namespace: 'Rushes'
  },
  tests: "tests/rushes-test.js"
});