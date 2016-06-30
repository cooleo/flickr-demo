'use strict';

/**
 * Module dependencies.
 */
var feedsPolicy = require('../policies/feeds.server.policy'),
  feeds = require('../controllers/feeds.server.controller');

module.exports = function (app) {
  // Feeds collection routes
  app.route('/api/feeds')
    .get(feeds.list)
    .post(feeds.search);
};
