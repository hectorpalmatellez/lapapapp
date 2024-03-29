angular.module('app',
  [
    'app.env',
    'ionic',
    'restmod',
    'PlAuth',
    'LocalStorageModule',
    'app.controllers',
    'app.directives',
    'app.models',
    'app.services'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    console.log('LaPapApp ready');

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

angular.module('app.controllers', []);
angular.module('app.directives', []);
angular.module('app.models', []);
angular.module('app.services', []);
