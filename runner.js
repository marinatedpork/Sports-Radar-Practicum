/**
 * Import modules
 */
require('console.table');
var superbowl = require('./data/super-bowl-play-by-play.json');
var FootballStatisticAnalysis = require('./lib/football-statistic-analysis');

/**
 * Instantiate objects for parsing
 */
var rushCollector = new FootballStatisticAnalysis.Rushes();
var rushersAnalyzer = new FootballStatisticAnalysis.Rushers();

/**
 * Parse the data
 */
var rushStats = rushCollector.collect(superbowl);
var rusherStats = rushersAnalyzer.collect(rushStats);

/**
 * Format and print
 */
var topTenRushers = rushersAnalyzer.leaders(rusherStats).map(function(player) {
  return {
    Player: player,
    Yards: rusherStats[player]
  };
});

console.table(topTenRushers);