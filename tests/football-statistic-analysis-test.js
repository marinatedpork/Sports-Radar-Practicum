QUnit.module('Football Statistic Analysis');

var RUSHERS = 'Rushers';
var RUSHES = 'Rushes';

test('Contains a Rushers function', 2, function(assert) {
  var attrs = Object.keys(FootballStatisticAnalysis);
  assert.ok(attrs.indexOf(RUSHERS) > -1);
  assert.equal(typeof FootballStatisticAnalysis[RUSHERS], 'function');
});

test('Contains a Rushes function', 2, function(assert) {
  var attrs = Object.keys(FootballStatisticAnalysis);
  assert.ok(attrs.indexOf(RUSHES) > -1);
  assert.equal(typeof FootballStatisticAnalysis[RUSHES], 'function');
});