'use strict';

var should = require('should'),
    request = require('supertest'),
    path = require('path'),
    express = require(path.resolve('./lib/express'));

/**
 * Globals
 */
var app, agent;

/**
 * Feeds routes tests
 */
describe('Feeds Controller tests', function () {

    before(function (done) {
        // Get application
        app = express.init();
        agent = request.agent(app);

        done();
    });

    beforeEach(function (done) {
        done();

    });

    it('should  able to get feeds', function (done) {
        agent.get('/api/feeds').expect(200).end(function (feedsGetErr, feedsGetRes) {
            if (feedsGetErr) {
                return done(feedsGetErr);
            }
            done();
        });
    });


    it('should  able to get feeds', function (done) {
        agent.get('/api/feeds')
            .end(function (feedsGetErr, feedsGetRes) {
                if (feedsGetErr) {
                    return done(feedsGetErr);
                }
                feedsGetRes.body.should.be.instanceof(Array);

                // Call the assertion callback
                done();
            });
    });

    it('should  able to search feeds', function (done) {
        var searchBody = {
            tags: "dogs,cat"
        };
        agent.post('/api/feeds')
            .send(searchBody)
            .expect(200)
            .end(function (articleSaveErr, articleSaveRes) {
                // Call the assertion callback
                done(articleSaveErr);
            });
    });

    it('should  able to search feeds has result', function (done) {
        var searchBody = {
            tags: "dogs,cat"
        };
        agent.post('/api/feeds')
            .send(searchBody)
            .expect(200)
            .end(function (searchFeedErr, searchFeedRes) {
                if (searchFeedErr) {
                    return done(searchFeedErr);
                }
                searchFeedRes.body.stat.should.equal('ok');
                done();
            });
    });

});
