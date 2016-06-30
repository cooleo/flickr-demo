'use strict';

angular.module('core').controller('HomeController', ['$scope','Feeds',
  function ($scope,Feeds) {
   // get popular feeds

    $scope.find = function () {
      $scope.feeds = Feeds.getPoular();
    };
  }
]);
