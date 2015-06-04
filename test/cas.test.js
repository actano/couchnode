'use strict';

var assert = require('assert');
var harness = require('./harness.js');

describe('#Cas', function() {
  function allTests(H) {
    it('should test cas', function (done) {
      var cluster = new H.lib.Cluster(H.connstr);
      var bucket = cluster.openBucket(H.bucket);
      var cb = bucket._cb;
      var str = "14616426871347347712";
      var parsed = cb.parseCas(str);
      assert.equal(parsed.toString(), str);
      done();
    })
  }
  describe('#RealBucket', allTests.bind(this, harness));
  //describe('#MockBucket', allTests.bind(this, harness.mock));
});
