/**
 * Returns an instance of a Rush collector. This object with parse out all of
 * the rush plays in an game. One might consider abstracting it more to handle
 * different types of play, and make it a singleton object.
 * @constructor
 * @return {object} An instance of a Rushes Collector
 */
module.exports = function() {
  
  /**
   * The literal types of play plays and events
   * @type {object}
   */
  var types = {
    RUSH: 'rush',
    DRIVE: 'drive'
  };

  /**
   * Reduces and aggregates all of nested plays in each period and play-by-play
   * into a single array.
   * @param  {object} data - A game object
   * @return {array}         All of the rush event in a single game
   */
  function collect(data) {
    return data.periods.reduce(function(accum, period) {
      return accum.concat(period.pbp.reduce(aggregate, []));  
    }, []);
  }

  /**
   * Filters and concatenates all rush events within a given play-by-play
   * @param  {array}  accum - The accumulating array of rush events
   * @param  {object} play  - A play object containing an array of events
   * @return {array}          An array of rush events
   */
  function aggregate(accum, play) {
    if (play.type === types.DRIVE) {
      return accum.concat(play.events.filter(isRush));
    } else {
      return accum;
    }
  }

  /**
   * A callback for the filter in the aggregate method
   * @param  {object}  event - An event object
   * @return {boolean}         Whether or not the event's play type is a rush
   */
  function isRush(event) {
    return event.play_type === types.RUSH;
  }

  /**
   * Returns only the methods that need to be exposed externally
   */
  return {
    collect: collect
  };

}