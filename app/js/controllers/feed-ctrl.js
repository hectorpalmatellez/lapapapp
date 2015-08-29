angular.module('app.controllers')

.controller('FeedCtrl', function($scope, $http){
  'use strict';

  $http.get('https://lapapappi.herokuapp.com/api/spots.json').
    success(function(data) {
      $scope.spots = data;
    });
});
