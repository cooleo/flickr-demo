'use strict';

//feeds service used for communicating with the feeds REST endpoints
angular.module('feeds').factory('Search', ['$resource',
    function ($resource) {
        return $resource('api/feeds', {}, {
            search: {
                method: 'POST',
                url: 'api/feeds',
                isArray: false
            }
        });
    }
]);
