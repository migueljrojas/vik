'use strict';

var Chronology = require('../chronology');

describe('Chronology View', function() {

  beforeEach(function() {
    this.chronology = new Chronology();
  });

  it('Should run a few assertions', function() {
    expect(this.chronology);
  });

});
