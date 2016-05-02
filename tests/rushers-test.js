QUnit.module('Rushers');

var sampleRush = require('./data/sample-rush.json');
var FUNCTION = 'function';
var LEADERS = 'leaders';
var COLLECT = 'collect';
var SAMPLE_PLAYER = 'LeGarrette Blount';
var SAMPLE_YARDS = 2;
var SAMPLE_PLAYERS = {
  'President Garfield': 10,
  'Prince, the Musician': 11,
  'GabeN': 666,
  'LeGarrette Blount': 9001
};

test('Rushers instance contains a \'leaders\' function', 2, function(assert) {
  var rusherAnalyzer = new Rushers();
  var attrs = Object.keys(rusherAnalyzer);
  assert.ok(attrs.indexOf(LEADERS) > -1);
  assert.equal(typeof rusherAnalyzer[LEADERS], FUNCTION);
});

test('Rushers instance contains a \'collect\' function', 2, function(assert) {
  var rusherAnalyzer = new Rushers();
  var attrs = Object.keys(rusherAnalyzer);
  assert.ok(attrs.indexOf(COLLECT) > -1);
  assert.equal(typeof rusherAnalyzer[COLLECT], FUNCTION);
});

test('Collect function takes an array of rush plays and returns a object of player names and rush yards', 2, function(assert) {
  var rusherAnalyzer = new Rushers();
  var rushers = rusherAnalyzer.collect(sampleRush);
  var playerNames = Object.keys(rushers);
  assert.ok(playerNames.indexOf(SAMPLE_PLAYER) > -1);
  assert.equal(rushers[SAMPLE_PLAYER], SAMPLE_YARDS);
});

test('Leader function takes an object of string keys and integer values, and returns an array of the keys sorted by their value - largest to smallest', 1, function(assert) {
  var rusherAnalyzer = new Rushers();
  var leaders = rusherAnalyzer.leaders(SAMPLE_PLAYERS);
  assert.equal(leaders[0], SAMPLE_PLAYER);
});