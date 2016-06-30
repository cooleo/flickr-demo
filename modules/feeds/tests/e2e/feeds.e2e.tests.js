'use strict';

describe('Feeds E2E Tests:', function () {
  describe('Test feeds page', function () {
    it('Should report missing credentials', function () {
      browser.get('http://localhost:3001/feeds');
      expect(element.all(by.repeater('feeds in feeds')).count()).toEqual(0);
    });
  });
});
