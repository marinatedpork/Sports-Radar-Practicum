QUnit.module('Rushes');

/**
 * I implement this instance method because it's super handy and
 * many APIs provide this behavior for arrays.
 *
 * It basically tells you if every element in an array satisfies
 * the predicate.
 * 
 * @param  {Function} f [a function that returns a Boolean]
 * @return {Boolean}   [Whether or not everyone item satifies the predicate]
 */
Array.prototype.every = function(f) {
  for(var i = this.length - 1; i >= 0; i--) {
    if(!f(this[i])) {
      return false;
    }
  }
  return true;
}

var sampleGame = require('./data/sample-period.json');
var COLLECT = 'collect';
var FUNCTION = 'function';
var NUMBER_OF_RUSHES = 13;

test('Rushes instance contains a \'collect\' function', 2, function(assert) {
  var rushCollector = new Rushes();
  var attrs = Object.keys(rushCollector);
  assert.ok(attrs.indexOf(COLLECT) > -1);
  assert.equal(typeof rushCollector[COLLECT], FUNCTION);
});

test('Collect returns all of the rush plays in a game.', 2, function(assert) {
  var rushCollector = new Rushes();
  var rushes = rushCollector.collect(sampleGame);
  assert.ok(rushes.every(function(play) {
    return play.play_type === 'rush';
  }));
  assert.equal(rushes.length, NUMBER_OF_RUSHES);
})