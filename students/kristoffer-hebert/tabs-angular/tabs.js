var tabsAssignment = angular.module('tabsAssignment', [
  'ngResource',
  'ngRoute'
]);

tabsAssignment.config(function($routeProvider){

  $routeProvider
    .when('/', { controller: 'TabController'})
    .otherwise({redirectTo: '/'});

});

tabsAssignment.controller('TabController', function( $scope, $http, $routeParams) {
      $http({
        method: 'GET',
        url: 'http://rs.hankyates.com:3000/content'
      }).
      success(function(data, status, headers, config){
        $scope.data = data;
      }).
      error(function(data, status, headers, config){
        $scope.error = 'Failed to connect';
      });

      $scope.currentTab = 0;

      $scope.setTab = function(index){
          $scope.currentTab = index;
          console.log($scope.currentTab);
      };

});