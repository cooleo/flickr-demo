'use strict';

/**
 * Module dependencies.
 */
var path = require('path');
var FlickrJS = require('FlickrJS');

var config = require(path.resolve('./config/config'));

var keys = {'api_key': config.flickr.API_KEY};
var flickrJS = new FlickrJS(keys);

console.log("KEY" + config.flickr.API_KEY);

exports.list = function (req, res) {
    flickrJS.getPulicPhotos().then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        return res.status(500).send({
            message: err
        });
    });

};
exports.search = function (req, res) {

    flickrJS.get("photos.search", req.body).then(function (result) {
        res.json(JSON.parse(result));
    }).catch(function (err) {
        return res.status(500).send({
            message: err
        });

    });
};

