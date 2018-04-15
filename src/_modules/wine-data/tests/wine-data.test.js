'use strict';

var WineData = require('../wine-data');

describe('WineData View', function() {

  beforeEach(function() {
    this.wineData = new WineData();
  });

  it('Should run a few assertions', function() {
    expect(this.wineData);
  });

});
