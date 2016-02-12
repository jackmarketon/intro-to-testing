'use strict';

// We are going to assume this file
// gets an object from wordpress
// that contains a posts analytics info,
// also a second object containing dimension mapping

/**
 * Example Analytics Info feed via Asset Enqueque
 * {
 *   summary: 'Summary Text of post',
 *   postID: 1234,
 *   permalink: 'http://www.andromedea.com/post/id?=1234',
 *   dimensions: [
 *     {'author': 'Sinead Simons'},
 *     {'topics': ['testing', 'javascript', 'node', 'java']},
 *     {'postedDate': 'Dec 21, 2020'},
 *     {'category': ['programming']}
 *   ]
 * }
 */

/**
 * Example dimension mapping
 * {
 *   'dimension7': 'author',
 *   'dimension8': 'topics',
 *   'dimension5': 'postedDate',
 *   'dimension1': 'category',
 *   'dimension2': 'userLoggedIn',
 *   'dimension3': 'summary'
 * }
 */

function init() {
  var dimensions = dimensionMapping(window.dimensionMap, window.analyticsInfo);
}

function sendAnalyticsData(dimensions, author, permalink) {

}

function dimensionMapping(dimensionMap, data) {
  if (typeof dimensionMap !== 'object' || typeof data !== 'object') {
    return;
  }

  var retDem = {};

  // First grab root level
  Object.keys(dimensionMap).forEach(function(dimension) {
    retDem[dimension] = data[dimensionMap[dimenson]];
  });
  // Next grab dimension level
  Object.keys(dimensionMap).forEach(function(dimension) {
    retDem[dimension] = data.dimensions[dimensionMap[dimension]];
  });

  return retDem;
}

init();