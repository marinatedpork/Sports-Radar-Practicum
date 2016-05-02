/**
 * Rushers contains methods for aggregating players names and their total rush yardage,
 * as well as sorting an aggregated player object by their total rush yardage.
 * @return {object} An object containing the 'leaders' and 'collect' methods
 */
module.exports = function() {
  
  /**
   * The literal strings for stat types
   * @type {object}
   */
  var types = {
    RUSH: 'rush'
  };

  /**
   * Collects player who have rushed and aggregates their total rushed yards.
   * Does this by working into the nested statistics arrays and passing through
   * an accumulating object with keys as player names and values as their total
   * rush yardage
   * @param  {array} data - An array of rush events from a game
   * @return {object}       An aggregation of name
   */
  function collect(data) {
    return data.reduce(function(accum, rush) {
      return rush.statistics.reduce(aggregate, accum);  
    }, {});
  }

  /**
   * If the stat is a rush, the player's total yardage is incremented
   * by the yardage of the play. Otherwise, the stat is skipped over
   * @param  {object} accum - The initial value from collect's reduce
   * @param  {object} stat  - A given stat object from the statistics array
   * @return {object}         The accumulator with players names and their total yardage         
   */
  function aggregate(accum, stat) {
    if (stat.stat_type !== types.RUSH) {
      return accum;
    }

    var player = stat.player.name;
    var yards = stat.yards;

    if (!accum[player]) {
      accum[player] = yards;
    } else {
      accum[player] += yards;
    }

    return accum;
  }

  /**
   * Sorts the key in the output of 'collect' method by their values.
   * @param  {object} rushers - The object from 
   * @return {array}            An array of player names sorted by most yards rushed
   */
  function leaders(rushers) {
    return Object.keys(rushers).sort(function(a, b) {
      return rushers[a] < rushers[b];
    });
  }

  /**
   * Returns only the methods that need to be exposed externally
   */
  return {
    leaders: leaders,
    collect: collect
  };

}