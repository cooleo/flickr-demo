'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Menus','$location',
    function ($scope, $state, Menus,$location) {
        // Expose view variables
        $scope.$state = $state;

        // Get the topbar menu
        $scope.menu = Menus.getMenu('topbar');

        // Toggle the menu items
        $scope.isCollapsed = false;
        $scope.toggleCollapsibleMenu = function () {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function () {
            $scope.isCollapsed = false;
        });

        $scope.$on('searchTextChange', function (data) {
            $scope.searchText = data;
        });

        $scope.goToSearch = function () {
            if ($scope.searchText !== null && $scope.searchText.length > 0) {
                if ($location.path().startsWith('/search')) {
                    $state.go('feeds.search', {
                        searchText: $scope.searchText
                    }, {location: 'replace'});
                }
                else {
                    $state.go('feeds.search', {searchText: $scope.searchText});
                }
            }

        };
    }
]);
