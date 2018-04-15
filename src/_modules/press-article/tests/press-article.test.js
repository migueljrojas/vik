'use strict';

var PressArticle = require('../press-article');

describe('PressArticle View', function() {

  beforeEach(function() {
    this.pressArticle = new PressArticle();
  });

  it('Should run a few assertions', function() {
    expect(this.pressArticle);
  });

});
