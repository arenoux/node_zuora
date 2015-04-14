/**
 *  Tests for things that are in lib/common.js
 */

var test = require('tape');
var common = require('../../lib/common');

test.skip ('common: empty', function (t) {
  t.plan(0);
});

test ('common: chunk large array into array of smaller ones', function(t) {
  t.plan(2);
  var chunkSize = 2;
  var a = [1,2,3,4,5,6];
  var result = common.chunk(a, chunkSize);
  t.ok(a.length == 6, 'original array is untouched')
  t.ok(result.length == (Math.ceil(a.length / chunkSize)), 'expected number of chunks')
  console.dir(a);
  console.dir(result);
});