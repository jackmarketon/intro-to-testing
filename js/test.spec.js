'use strict';

/*
  Jasmine tests are composed of `describe` blocks
  which tell the context that is being tested
  and `it` blocks which describe the test itself

  `describe` blocks can be nested indefinitly,
  but `it` blocks cannot. To be a valid test
  `it` blocks must contain at least one `expect`.

  You can also mark `describe` and `it` as "pending"
  by appending an X, `xdescribe` and `xit`, you
  can also use a `pending()` function.

  There are also setup and teardown functions:
  `beforeEach` and `afterEach` to assign values,

  Variables need to be passed like globals between tests

  Jasmine also has a boatload of matchers, see:
  http://jasmine.github.io/2.4/introduction.html#section-Included_Matchers
  and you can write your own if you need to!
*/

// Super basic test example
describe('Basic tests', function() {
  it('test failing', function() {
    expect(false).toBe(true);
  });
  it('test passing', function() {
    expect(true).toBe(true);
  });
});

// Test Example with variable & setup/teardown
describe('Variable & Setup test', function() {
  var testThis = 0;

  beforeEach(function() {
    testThis++;
  });

  it('This should pass', function() {
    expect(testThis).toBe(1);
    testThis++;
    expect(testThis).toBe(2);
  });
  it('This should fail', function() {
    expect(testThis).toBe(2);
  });
});

xdescribe('This block is pending', function() {
  it('This test is not ran', function() {
    expect(false).toBe(true);
  })
});

describe('This block contains pending tests', function() {
  xit('This test is pending', function() {
    expect(false).toBe(true);
  });
  xit('This test is also pending', function() {
    expect(false).toBe(true);
    pending();
  });
});