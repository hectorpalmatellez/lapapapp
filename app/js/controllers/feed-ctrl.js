angular.module('app.controllers')

.controller('FeedCtrl', function($scope, $http, ionicMaterialMotion, $timeout){
  'use strict';

  $http.get('https://lapapappi.herokuapp.com/api/spots.json').
    success(function(data) {
      $scope.spots = data;

      // $timeout(function () {
      //   ionicMaterialMotion.fadeSlideInRight();
      // }, 1000);
      // FIXME: animation not working
    });

});
