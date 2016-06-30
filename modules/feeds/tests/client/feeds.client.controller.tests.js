'use strict';

(function () {
  // Feeds Controller Spec
  describe('Feeds Controller Tests', function () {
    // Initialize global variables
    var FeedsController,
      scope,
      $httpBackend,
      $stateParams,
      $location,
      Feeds,
      mockFeed;

    beforeEach(function () {
      jasmine.addMatchers({
        toEqualData: function (util, customEqualityTesters) {
          return {
            compare: function (actual, expected) {
              return {
                pass: angular.equals(actual, expected)
              };
            }
          };
        }
      });
    });

    // Then we can start by loading the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    beforeEach(inject(function ($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_, _Feeds_) {
      // Set a new global scope
      scope = $rootScope.$new();

      // Point global variables to injected services
      $stateParams = _$stateParams_;
      $httpBackend = _$httpBackend_;
      $location = _$location_;

      Feeds = _Feeds_;

      // create mock article
      mockFeed = new Feeds({
        _id: '525a8422f6d0f87f0e407a33',
        title: 'An Feeds about',
        content: 'Content feed!'
      });


      // Initialize the Feeds controller.
      FeedsController = $controller('FeedsController', {
        $scope: scope
      });
    }));

    it('$scope.find() should get an array with at least one feed object fetched from XHR', inject(function () {
      // Create a sample feeds array that includes the new article
      var sampleFeeds = [mockFeed];
      // Set GET response
      $httpBackend.expectGET('api/feeds').respond(sampleFeeds);

      // Run controller functionality
      scope.find();
      $httpBackend.flush();

      // Test scope value
      expect(scope.feeds).toEqualData(sampleFeeds);
    }));


    it('$scope.search() should get one search object  from XHR', inject(function (Feeds) {
      // Create a sample feeds array that includes the new article
      var sampleSearchData = {
        "tags":"dogs,cat"
      };
      var sampleFeeds = mockFeed;
      // Set GET response
      $httpBackend.expectPOST('api/feeds',sampleSearchData).respond(sampleFeeds);

      // Run controller functionality
      scope.search();
      $httpBackend.flush();

    }));




  });
}());
