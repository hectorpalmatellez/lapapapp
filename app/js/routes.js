angular.module('app')

.config(function($stateProvider, $urlRouterProvider) {
  'use strict';

  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })
  .state('app.home', {
    url: '/home',
    views: {
      menuContent: {
        controller: 'FeedCtrl',
        templateUrl: 'templates/app/feed.html'
      }
    }
  })
  .state('app.auth', {
    url: '/auth',
    views: {
      menuContent: {
        templateUrl: 'templates/app/auth.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/feed');
});
