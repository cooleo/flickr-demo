'use strict';

// Setting up route
angular.module('feeds').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('feeds', {
        abstract: true,
        url: '/feeds',
        template: '<ui-view/>'
      })
      .state('feeds.list', {
        url: '',
        templateUrl: 'modules/feeds/client/views/list-feeds.client.view.html'
      })
      .state('feeds.search', {
        url: '/search/:searchText',
        templateUrl: 'modules/feeds/client/views/search-feeds.client.view.html'
      });
  }
]);
