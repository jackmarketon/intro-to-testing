'use strict';

import ae from `./analyticsEngine.js`;

var analyticsInfo = {
  summary: 'Summary Text of post',
  postID: 1234,
  permalink: 'http://www.andromedea.com/post/id?=1234',
  dimensions: [
    {'author': 'Sinead Simons'},
    {'topics': ['testing', 'javascript', 'node', 'java']},
    {'postedDate': 'Dec 21, 2020'},
    {'category': ['programming']}
  ]
};

var dimensionMap = {
  'dimension1': 'category',
  'dimension2': 'userLoggedIn',
  'dimension3': 'summary',
  'dimension5': 'postedDate',
  'dimension7': 'author',
  'dimension8': 'topics'
};

describe('GA dimensions', function() {
  it('should be mapped properly', function() {
    var ret = {
      'dimension1': ['programming'],
      'dimension2': '',
      'dimension3': 'Summary Text of post',
      'dimension5': 'Dec 21, 2020',
      'dimension7': 'Sinead Simons',
      'dimension8': ['testing', 'javascript', 'node', 'java']
    };

    var res = ae.dimensionMapping(dimensionMap, analyticsInfo);
    Object.keys(ret).forEach(function(item) {
      expect(ret[item]).toBe(res[item]);
    });
  });
});
