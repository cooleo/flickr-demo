'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('core').factory('Feeds', ['$resource',
    function ($resource) {
        return $resource('api/feeds', {}, {
            getPoular: {
                method: 'GET',
                url: 'api/feeds',
                isArray: true
            }
        });
    }
]);
