'use strict';
var Flickr = require('node-flickr');
var keys = { 'api_key': 'c4acf6d10805b91555f3fcdd4ab9ebfa' };
var flickr = new Flickr(keys);

exports.getPopularFeed = function () {
     //console.log('getPopularFeed');
    flickr.get("photos.search", {"tags":"cat,dogs"}, function(err, result){
        if (err) return console.error(err);
        console.log(result.photos);
    });
};

exports.searchFeed = function (text) {
     //console.log('searchFeed:' + text);
};









