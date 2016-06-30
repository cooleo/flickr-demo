'use strict';

// feeds controller
angular.module('feeds').controller('FeedsController', ['$scope', '$stateParams', '$location', 'Search',
    function ($scope, $stateParams, $location, Search) {

        $scope.searchText = '';
        // search feeds
        $scope.search = function () {
            var body = {
                tags: $stateParams.searchText
            };
            console.log('search........');
            $scope.$emit('searchTextChange', $stateParams.searchText);
            $scope.searchText = $stateParams.searchText;
            $scope.feeds = Search.search(body);
        };

    }
]);
